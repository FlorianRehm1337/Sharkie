class World {

    character = new Character();
    healthbar = new Healthbar();
    coinbar = new Coinbar();
    poisonbar = new Poisonbar();
    throwableObjects = [];
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects(){
        if(this.keyboard.D){
            let bottle = new ThrowableObject(this.character.x + 200, this.character.y + 130,this.character.otherDirection);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {

        this.level.jellyfishes.forEach((jellyfish) => {
            if (this.character.isColliding(jellyfish)) {

                this.character.hit();
                this.healthbar.setPercentage(this.character.energy)
                console.log('colliding', this.character.energy);
            };

        })

        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                console.log('colliding with boss')
            }
        })

    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //clear Canvas

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.lights);
        this.ctx.translate(-this.camera_x, 0); //Back
        this.addToMap(this.healthbar);
        this.addToMap(this.coinbar);
        this.addToMap(this.poisonbar);
        this.ctx.translate(this.camera_x, 0); //Forwards

        this.addToMap(this.character)

        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.pufferfishes);
        this.addObjectsToMap(this.level.jellyfishes);
        this.addObjectsToMap(this.level.endboss);

        this.ctx.translate(-this.camera_x, 0); //Back


        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        }); //wird so oft aufgerufen wie die Grafikkarte kann
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
}