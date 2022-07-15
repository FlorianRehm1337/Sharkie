class Endboss extends MovableObject {

    height = 300;
    width = 300;
    y = 75;
    status;
    speed = 2.5;

    offset = {
        x: 20,
        y: 140,
        width: 20,
        height: 50,
    }

    IMAGES_SWIMMING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    IMAGES_POISONED = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ]

    IMAGES_INTRODUCE = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ]

    IMAGES_ATTACKING = [

    ]

    introAlreadyPlayed = false;
    deadAlreadyPlayed = false;
    introCounter = 0;
    deadCounter = 0;
    world;
    attacking = false;

    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/2.floating/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_POISONED);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 300;
        this.animate();
        this.addIntroCounter();
        this.checkTime();
        this.swimVerticalDown(this.height)
        this.swimLeft();
    }

    animate() {
        let animation = setInterval(() => {
            if (!this.currentImage == 1000) { //!this.introAlreadyPlayed
                
                //this.playIntro();
            }else if(this.isDead() && !this.deadAlreadyPlayed){
                this.startDeadCounter();
                clearInterval(animation);
            }else if(!this.attacking){

            } else if(this.introAlreadyPlayed && this.status != 'poisoned'){
                this.playAnimation(this.IMAGES_SWIMMING);
            } else if(this.status == 'poisoned'){
                this.playAnimation(this.IMAGES_POISONED);
            } 
            
        }, 100);
    }

    addIntroCounter(){
        let introInterval = setInterval(() => {
            this.introCounter++;
            this.playAnimation(this.IMAGES_INTRODUCE);
            if (this.introCounter == this.IMAGES_INTRODUCE.length -1) {
                clearInterval(introInterval);
                this.introAlreadyPlayed = true;
            }
        }, 100);
    }

    startDeadCounter(){
        let deadInterval = setInterval(() => {
            this.deadCounter++;
            this.playAnimation(this.IMAGES_DEAD);
            if (this.deadCounter == this.IMAGES_DEAD.length -1) {
                clearInterval(deadInterval);
                this.deadAlreadyPlayed = true;
                console.log('invervall stopped');
                this.loadImage(this.IMAGES_DEAD[4]);
                this.swimUpAfterDeath();
                this.world.endbossHealthbar.offset.top = 50
            }
        }, 100);
    }

    
}