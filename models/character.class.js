class Character extends MovableObject{
   
    height = 250;
    width = 250;
    y = 100;
    speed = 6;

    IMAGES_SWIMMING = [
            'img/1.Sharkie/3.Swim/1.png',
            'img/1.Sharkie/3.Swim/2.png',
            'img/1.Sharkie/3.Swim/3.png',
            'img/1.Sharkie/3.Swim/4.png',
            'img/1.Sharkie/3.Swim/5.png',
            'img/1.Sharkie/3.Swim/6.png',
    ];
    world;
    swimming_sound = new Audio('audio/swim.mp3');
    
    
    constructor(){ //constructer Sachen werden beim Starten sofort ausgeführt
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.animate();
    }

    animate(){

        setInterval(() =>{
            this.swimming_sound.pause();
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
                this.x += this.speed;
                this.otherDirection = false;
                this.swimming_sound.play();
            }

            if(this.world.keyboard.LEFT && this.x > 0){
                this.x -= this.speed;
                this.otherDirection = true;
                this.swimming_sound.play();
            }

            if(this.world.keyboard.UP && this.y > -115){ //-115 damit Sharkie nicht nach oben rausschwimmt
                this.y -= this.speed;
                this.swimming_sound.play();
            }

            if(this.world.keyboard.DOWN && this.y < 285){ //285 damit Sharkie nicht nach unten rausschwimmt
                this.y += this.speed;
                this.swimming_sound.play();
            }

            this.world.camera_x = -this.x + 50;
        }, 1000 / 60);

        setInterval(() => {

            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN){
                //Swim Animation
                this.playAnimation(this.IMAGES_SWIMMING);
                
            }
            
        }, 150);
       
    }

    jump(){

    }
}