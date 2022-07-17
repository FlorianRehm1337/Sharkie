class World {

    character = new Character();
    healthbar = new Healthbar();
    endbossHealthbar = new EndbossHealthbar(this);
    coinbar = new Coinbar();
    poisonbar = new Poisonbar();
    bonushealthbar = new BonusHealthbar();
    throwableObjects = [];
    level = level1;
    endboss = this.level.endboss.find(e => e instanceof Endboss);
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    collectedCoins = 0;
    collectedBottles = 100;
    energy = 100;
    endbossBarrierAdded = false;
    alreadyAttacking = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.drawBackgroundObjects();

    }

    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            //this.checkThrowObjects();
        }, 100);
    }

    shootNormalBubble() {
        let bubble = new ThrowableObject(this.character.x + 200, this.character.y + 130, this.character.otherDirection, 'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png', 'normal');
        this.throwableObjects.push(bubble);
    }

    shootPoisonBubble() {
        if (this.collectedBottles != 0) {
            let poisonBubble = new ThrowableObject(this.character.x + 200, this.character.y + 130, this.character.otherDirection, 'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble.png', 'poison');
            this.throwableObjects.push(poisonBubble);
            this.collectedBottles--;
            this.poisonbar.setCollectedBottles(this.collectedBottles);
        }

    }

    checkCollisions() {

        this.characterIsCollidingJellyfish();
        this.characterIsCollidingPufferfish();
        this.characterIsCollidingEndboss();
        this.characterIsCollidingCoin();
        this.characterIsCollidingPoisonBottle();
        this.characterIsCollidingLife();
        this.characterIsCollidingBarrier();
        this.endbossIsCollidingBubbles();
        this.endbossIsCollidingPoisonBubbles();
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //clear Canvas
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(this.camera_x, 0);
        this.addEndbossBarrier();
        this.drawLevelObjects();
        if (this.endboss.hadFirstContact) {
            this.addToMap(this.endbossHealthbar);
        }

        this.ctx.translate(-this.camera_x, 0); //Back
        this.drawCharacter();
        this.drawStatusbars();
        this.ctx.translate(this.camera_x, 0); //Forwards
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0); //Back

        // Draw() wird immer wieder aufgerufen
        this.startAnimationFrame()

    }

    startAnimationFrame() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    drawCharacter() {
            this.ctx.translate(this.camera_x, 0); //Forwards
            this.addToMap(this.character);
            this.ctx.translate(-this.camera_x, 0); //Back
    }

    addEndbossBarrier() {
        if (this.character.reachedEndboss && !this.endbossBarrierAdded) {
            this.level.barriers.push(new Barrier('img/3. Background/Barrier/3.png', 2200, 0));
            this.endbossBarrierAdded = true;
        }
        this.addObjectsToMap(this.level.barriers)
    }

    drawBackgroundObjects() {
        let firstBackground = 715;
        let imageCounter = 0;
        for (let i = -1; i < 10; i++) {
            imageCounter++;
            if (imageCounter == 3) {
                imageCounter = 1;
            }
            this.level.backgroundObjects.push(
                new BackgroundObject(`img/3. Background/Layers/5. Water/L${imageCounter}.png`, firstBackground * i, 0, this),
                new BackgroundObject(`img/3. Background/Layers/4.Fondo 2/L${imageCounter}.png`, firstBackground * i, 0.75, this),
                new BackgroundObject(`img/3. Background/Layers/3.Fondo 1/L${imageCounter}.png`, firstBackground * i, 2, this),
                new BackgroundObject(`img/3. Background/Layers/2. Floor/L${imageCounter}.png`, firstBackground * i, 5, this))

        }
            
        
    }

    drawLevelObjects() {
        this.addObjectsToMap(this.level.lights)
        this.addObjectsToMap(this.level.pufferfishes);
        this.addObjectsToMap(this.level.jellyfishes);
        if (this.endboss.hadFirstContact) {
            this.addObjectsToMap(this.level.endboss);
        }
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisonbottles);
        this.addObjectsToMap(this.level.lifes);
    }

    drawStatusbars() {
        this.addToMap(this.healthbar);
        this.addToMap(this.coinbar);
        this.addToMap(this.poisonbar);
        if (this.character.energy > 100) {
            this.addToMap(this.bonushealthbar);
        }
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        })
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1
        this.ctx.restore();
    }

    characterIsCollidingJellyfish() {
        this.level.jellyfishes.forEach((jellyfish) => {
            if (this.character.isColliding(jellyfish) && this.character.energy != 0 && !this.character.isInvulnerable()) {
                this.character.hittedByJellyfish = true;
                this.character.hit();
                console.log('colliding Jellyfish', this.character.energy);

                setTimeout(() => {
                    this.character.hittedByJellyfish = false;
                }, 900);

                if (this.character.energy > 100) {
                    this.bonushealthbar.setPercentage(this.character.energy);
                } else {
                    this.healthbar.setPercentage(this.character.energy);
                }
            };

        })
    }

    characterIsCollidingPufferfish() {
        this.level.pufferfishes.forEach((pufferfish,index) => {
            if (this.character.isColliding(pufferfish) && this.keyboard.SPACE && !this.alreadyAttacking){
                    this.alreadyAttacking = true;
                    setTimeout(()=>{
                        this.level.pufferfishes.splice(index,1);
                        this.alreadyAttacking = false;
                    },600)
                    
                
            }
            if (this.character.isColliding(pufferfish) && this.character.energy != 0 && !this.character.isInvulnerable() && !this.keyboard.SPACE) {
                this.character.hittedByPufferfish = true;
                this.character.hit();
                this.healthbar.setPercentage(this.character.energy)
                console.log('colliding Pufferfish', this.character.energy);
                setTimeout(() => {
                    this.character.hittedByPufferfish = false;
                }, 900);
            };

        })
    }

    characterIsCollidingEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.healthbar.setPercentage(this.character.energy)
                console.log('colliding with boss')
            }
        })
    }

    characterIsCollidingCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.collectedCoins++;
                this.level.coins.splice(index, 1);
                this.coinbar.setCollectedCoins(this.collectedCoins)
                console.log('colliding with coin')
            }
        })
    }

    characterIsCollidingPoisonBottle() {
        this.level.poisonbottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.collectedBottles++;
                this.level.poisonbottles.splice(index, 1);
                this.poisonbar.setCollectedBottles(this.collectedBottles);
                console.log('colliding with Bottle');
            }
        })
    }

    characterIsCollidingLife() {
        this.level.lifes.forEach((life, index) => {
            if (this.character.isColliding(life)) {
                this.character.energy += 20;
                this.level.lifes.splice(index, 1);
                if (this.character.energy < 100) {
                    this.healthbar.setPercentage(this.character.energy)
                } else {
                    this.healthbar.setPercentage(this.character.energy)
                    this.bonushealthbar.setPercentage(this.character.energy)
                }

                console.log('colliding with Life', this.character.energy);
            }
        })
    }

    characterIsCollidingBarrier() {
        this.level.barriers.forEach(barrier => {
            if (this.character.isColliding(barrier)) {
                this.character.barrierLeft = true;
                console.log('barrier links');
            } else if (this.character.isColliding(barrier)) {
                this.character.barrierRight = true;
                console.log('barrier rechts');
            } else {
                this.character.barrierLeft = false;
                this.character.barrierRight = false;
            }
        })
    }

    endbossIsCollidingBubbles() {
        this.throwableObjects.forEach((bubble, index) => {
            if (this.endboss.isColliding(bubble) &&
                this.throwableObjects[index].type == 'normal' &&
                this.endboss.status == 'poisoned' &&
                !this.throwableObjects[index].hittedEndboss) {


                if (this.endboss.energy <= 0 && !this.throwableObjects[index].hittedEndboss) {
                    this.endboss.energy == 0;

                } else if (!this.throwableObjects[index].hittedEndboss) {
                    this.endboss.energy -= 50;
                    this.throwableObjects[index].hittedEndboss = true;
                }

                this.endbossHealthbar.setPercentage(this.endboss.energy);
                console.log('Endboss Collidiert mit Bubble', this.endboss.energy);
            }
        });
    }

    endbossIsCollidingPoisonBubbles() {
        this.throwableObjects.forEach((bubble, index) => {
            if (this.endboss.isColliding(bubble) && this.throwableObjects[index].type == 'poison') {
                this.endboss.status = 'poisoned';
                setTimeout(() => {
                    this.endboss.status = 'normal';
                }, 1000)

            }
        });
    }
}


