class World{

character = new Character();
level = level1;
canvas;
ctx;
keyboard;
camera_x = 0;

constructor(canvas, keyboard){
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard; 
    this.draw();
    this.setWorld();
    this.checkCollisions();
}

setWorld(){
    this.character.world = this;
}

checkCollisions(){
    setInterval(() => {
        this.level.enemies.forEach((enemy) => {
           if (this.character.isColliding(enemy)){
            
            this.character.hit();
            console.log('colliding',this.character.energy);
           };
        
        })

        this.level.endboss.forEach((endboss) =>{
            if(this.character.isColliding(endboss)){
                console.log('colliding with boss')
            }
        })
    }, 100);
}

    draw(){

        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height) //clear Canvas

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        
        this.addToMap(this.character)
        
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.lights);
        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        }); //wird so oft aufgerufen wie die Grafikkarte kann
    }

    addToMap(mo){
        if(mo.otherDirection){
           this.flipImage(mo)
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo.otherDirection){
            this.flipImageBack(mo)
        }
    }

    addObjectsToMap(objects){
        objects.forEach(o =>{
            this.addToMap(o)
        })
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        mo.x = mo.x * -1
        this.ctx.restore();
    }
}