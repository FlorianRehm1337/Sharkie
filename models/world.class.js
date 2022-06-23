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

        this.characterIsCollidingJellyfish();
        this.characterIsCollidingPufferfish();
        this.characterIsCollidingEndboss();
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //clear Canvas
        this.ctx.translate(this.camera_x, 0);
        this.drawLevelObjects(); 
        this.addToMap(this.character)
        this.ctx.translate(-this.camera_x, 0); //Back
        this.drawStatusbars();
        this.ctx.translate(this.camera_x, 0); //Forwards
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0); //Back

        // Draw() wird immer wieder aufgerufen
        this.startAnimationFrame()
       
    }

    startAnimationFrame(){
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        }); 
    }

    drawLevelObjects(){
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.pufferfishes);
        this.addObjectsToMap(this.level.jellyfishes);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.coins);
    }

    drawStatusbars(){
        this.addToMap(this.healthbar);
        this.addToMap(this.coinbar);
        this.addToMap(this.poisonbar);
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

    characterIsCollidingJellyfish(){
        this.level.jellyfishes.forEach((jellyfish) => {
            if (this.character.isColliding(jellyfish)) {

                this.character.hit();
                this.healthbar.setPercentage(this.character.energy)
                console.log('colliding', this.character.energy);
            };

        })
    }

    characterIsCollidingPufferfish(){
        this.level.pufferfishes.forEach((pufferfish) => {
            if (this.character.isColliding(pufferfish)) {

                this.character.hit();
                this.healthbar.setPercentage(this.character.energy)
                console.log('colliding', this.character.energy);
            };

        })
    }

    characterIsCollidingEndboss(){
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.healthbar.setPercentage(this.character.energy)
                console.log('colliding with boss')
            }
        })
    }
}