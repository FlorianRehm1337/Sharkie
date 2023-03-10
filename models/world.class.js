class World {

    assets;
    character = new Character(this,assets);
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
    collectedBottles = 0;
    energy = 100;
    endbossBarrierAdded = false;
    alreadyAttacking = false;
    audios;

    constructor(canvas, keyboard, audioCollection,assets) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.assets = assets;
        this.audios = audioCollection;
        this.startBackgroundMusic();
        this.draw();
        this.setWorld();
        this.run();
        this.drawBackgroundObjects();
     }

    setWorld() {
        this.endboss.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
        }, 100);
    }

    shootNormalBubble() {
        let bubble = new ThrowableObject(this.character.x + 200, this.character.y + 130, this.character.otherDirection, 'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png', 'normal');
        this.throwableObjects.push(bubble);
        this.audios.characterAttack.play();
    }

    shootPoisonBubble() {
        if (this.collectedBottles != 0) {
            let poisonBubble = new ThrowableObject(this.character.x + 200, this.character.y + 130, this.character.otherDirection, 'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble.png', 'poison');
            this.throwableObjects.push(poisonBubble);
            this.collectedBottles--;
            this.poisonbar.setCollectedBottles(this.collectedBottles);
            this.audios.characterAttack.play();

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

    startBackgroundMusic(){
            this.audios.normalBackground.play();
            this.audios.normalBackground.loop = true;
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.addObjectsToMap(this.level.backgroundObjects[0]);
        this.ctx.translate(this.camera_x, 0);
        this.addEndbossBarrier();
        this.drawLevelObjects();

        if (this.endboss.hadFirstContact) {
            this.addToMap(this.endbossHealthbar);
        }

        this.ctx.translate(-this.camera_x, 0);
        this.drawCharacter();
        this.drawStatusbars();
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);

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
                this.level.backgroundObjects[0].push(
                    new BackgroundObject(`img/3. Background/Layers/5. Water/L${imageCounter}.png`, firstBackground * i, 0, this),
                    new BackgroundObject(`img/3. Background/Layers/4.Fondo 2/L${imageCounter}.png`, firstBackground * i, 0.75, this),
                    new BackgroundObject(`img/3. Background/Layers/3.Fondo 1/L${imageCounter}.png`, firstBackground * i, 2, this),
                    new BackgroundObject(`img/3. Background/Layers/2. Floor/L${imageCounter}.png`, firstBackground * i, 5, this))
                this.level.backgroundObjects[1].push(
                    new BackgroundObject(`img/3. Background/Layers/5. Water/D${imageCounter}.png`, firstBackground * i, 0, this),
                    new BackgroundObject(`img/3. Background/Layers/4.Fondo 2/D${imageCounter}.png`, firstBackground * i, 0.75, this),
                    new BackgroundObject(`img/3. Background/Layers/3.Fondo 1/D${imageCounter}.png`, firstBackground * i, 2, this),
                    new BackgroundObject(`img/3. Background/Layers/2. Floor/D${imageCounter}.png`, firstBackground * i,5, this),
                )
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
                this.audios.jellyfishAttack.play();
                this.audios.characterHurt.play();

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
                        this.audios.characterFinslap.play();
                    },600)
                    
                
            }
            if (this.character.isColliding(pufferfish) && this.character.energy != 0 && !this.character.isInvulnerable() && !this.keyboard.SPACE) {
                this.character.hittedByPufferfish = true;
                this.character.hit();
                this.audios.characterHurt.play();
                this.healthbar.setPercentage(this.character.energy);
                setTimeout(() => {
                    this.character.hittedByPufferfish = false;
                }, 900);
            };

        })
    }

    characterIsCollidingEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit(endboss);
                this.healthbar.setPercentage(this.character.energy);
                this.audios.characterHurt.play();

            }
        })
    }

    characterIsCollidingCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.audios.coinCollection.play();
                this.collectedCoins++;
                this.level.coins.splice(index, 1);
                this.coinbar.setCollectedCoins(this.collectedCoins)
            }
        })
    }

    characterIsCollidingPoisonBottle() {
        this.level.poisonbottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.collectedBottles++;
                this.level.poisonbottles.splice(index, 1);
                this.poisonbar.setCollectedBottles(this.collectedBottles);
                this.audios.bottleCollection.play();
            }
        })
    }

    characterIsCollidingLife() {
        this.level.lifes.forEach((life, index) => {
            if (this.character.isColliding(life)) {
                this.character.energy += 20;
                this.audios.healthCollection.play();
                this.level.lifes.splice(index, 1);
                if (this.character.energy < 100) {
                    this.healthbar.setPercentage(this.character.energy)
                } else {
                    this.healthbar.setPercentage(this.character.energy)
                    this.bonushealthbar.setPercentage(this.character.energy)
                }

            }
        })
    }

    characterIsCollidingBarrier() {
        this.level.barriers.forEach(barrier => {
            if (this.character.isColliding(barrier)) {
                this.character.barrierLeft = true;
            } else if (this.character.isColliding(barrier)) {
                this.character.barrierRight = true;
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
                    this.endboss.energy -= 30;
                    this.throwableObjects[index].hittedEndboss = true;
                    this.audios.bossHurt.play();
                }

                this.endbossHealthbar.setPercentage(this.endboss.energy);
            }
        });
    }

    endbossIsCollidingPoisonBubbles() {
        this.throwableObjects.forEach((bubble, index) => {
            if (this.endboss.isColliding(bubble) && this.throwableObjects[index].type == 'poison') {
                this.endboss.status = 'poisoned';
                this.audios.poisonBubble.play();
                setTimeout(() => {
                    this.endboss.status = 'normal';
                }, 1000)

            }
        });
    }
}


