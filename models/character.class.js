class Character extends MovableObject {

    height = 250;
    width = 250;
    y = 100;
    x = 0;
    speed = 6;

    offset = {
        x: 50,
        y: 120,
        width: 50,
        height: 50,
    }

    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    IMAGES_DEAD_SHOCKED = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png',
    ];

    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ];

    IMGAES_HURT_SHOCKED = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',

    ];

    IMAGES_FINSLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png',
    ];

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];

    IMAGES_NORMAL_ATTACK = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ];

    IMAGES_POISON_ATTACK = [];

    world;
    swimming_sound = new Audio('audio/swim.mp3');
    checkAlreadyRunning = false;
    spaceAlreadyPressed = false;
    attacked = false;
    hittedByJellyfish = false;
    hittedByPufferfish = false;

    constructor() { //constructer Sachen werden beim Starten sofort ausgeführt
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.x = 0;
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEAD_SHOCKED);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMGAES_HURT_SHOCKED);
        this.loadImages(this.IMAGES_FINSLAP);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_NORMAL_ATTACK);
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.swimming_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.UP && this.y > -115) { //-115 damit Sharkie nicht nach oben rausschwimmt
                this.y -= this.speed;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.DOWN && this.y < 285) { //285 damit Sharkie nicht nach unten rausschwimmt
                this.y += this.speed;
                this.swimming_sound.play();
            }

            this.world.camera_x = -this.x + 50;
        }, 1000 / 60);

        let animation = setInterval(() => {

            if (this.isDead() && this.hittedByJellyfish) {

                this.playAnimation(this.IMAGES_DEAD_SHOCKED);
                this.world.keyboard = false;
                setTimeout(() => {
                    clearInterval(animation)
                }, 1000);
                if (this.deadCounter == this.IMAGES_DEAD_SHOCKED.length - 1) {
                    clearInterval(animation);
                }

            } else if (this.isDead() && this.hittedByPufferfish) {

                this.playAnimation(this.IMAGES_DEAD);
                this.world.keyboard = false;
                setTimeout(() => {
                    clearInterval(animation)
                }, 1000);
                if (this.deadCounter == this.IMAGES_DEAD.length - 1) {
                    clearInterval(animation);
                }

            } else if (this.isHurt() && this.hittedByJellyfish) {
                this.playAnimation(this.IMGAES_HURT_SHOCKED);
            } else if (this.isHurt() && this.hittedByPufferfish) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.world.keyboard.SPACE) {
                this.activateSpace()
                this.playAnimation(this.IMAGES_FINSLAP);
                this.spaceAlreadyPressed = true;
            } else if (this.checkMovementKeyIsPressed()) {
                this.playAnimation(this.IMAGES_SWIMMING);

            } else if (this.noKeyIsPressed()) {
                this.playAnimation(this.IMAGES_IDLE);
            }

        }, 100);

        setInterval(() => {
            if (this.world.keyboard.D) {
                this.activateAttack();
                this.playAnimation(this.IMAGES_NORMAL_ATTACK);
                this.attacked = true;
            }
        }, 60)
    }

    activateAttack() {
        if (!this.attacked) {
            this.currentImage = 0;
            let DIsPressed = setInterval(() => {
                this.world.keyboard.D = true;
                this.attacked = true;
                console.log(this.world.keyboard.D, 'hallooooo')
            }, 60)

            setTimeout(() => {
                this.world.keyboard.D = false;
                clearInterval(DIsPressed)
                this.attacked = false;
            }, 500)
        }

    }

    activateSpace() {

        if (!this.checkAlreadyRunning) {
            this.currentImage = 0;
            let spacePressed = setInterval(() => {
                this.world.keyboard.SPACE = true;
                this.checkAlreadyRunning = true;
                console.log(this.world.keyboard.SPACE)
            }, 100)

            setTimeout(() => {
                this.world.keyboard.SPACE = false;
                this.checkAlreadyRunning = false;
                clearInterval(spacePressed)
                this.spaceAlreadyPressed = false;
            }, 800)
        }

    }

    dash() {

    }

    checkMovementKeyIsPressed() {
        return this.world.keyboard.RIGHT ||
            this.world.keyboard.LEFT ||
            this.world.keyboard.UP ||
            this.world.keyboard.DOWN
    }

    noKeyIsPressed() {
        return !this.world.keyboard.RIGHT &&
            !this.world.keyboard.LEFT &&
            !this.world.keyboard.UP &&
            !this.world.keyboard.DOWN &&
            !this.spaceAlreadyPressed &&
            !this.world.keyboard.D &&
            !this.attacked
    }

    /* stopAnimation(animation){
        setTimeout(() => {
            clearInterval(animation);   
        }, 400);

    } */
}