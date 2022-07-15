class Character extends MovableObject {

    height = 250;
    width = 250;
    y = 100;
    x = 0;
    speed = 8;

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

    IMAGES_POISON_ATTACK = [
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png',
    ];

    world;
    swimming_sound = new Audio('audio/swim.mp3');
    checkAlreadyRunning = false;
    spaceAlreadyPressed = false;
    attacked = false;
    hittedByJellyfish = false;
    hittedByPufferfish = false;
    killedByJellyfish = false;
    killedByPufferfish = false;

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
        this.loadImages(this.IMAGES_POISON_ATTACK);
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.swimming_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.world.keyboard.LEFT = false;
                this.x += this.speed;
                this.otherDirection = false;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.world.keyboard.RIGHT = false;
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

            if (this.isDead() && this.hittedByJellyfish && !this.hittedByPufferfish) {
                this.killedByJellyfish = true;
                this.world.keyboard = false;
                this.activateDeathAnimation(animation);

            } else if (this.isDead() && this.hittedByPufferfish && !this.hittedByJellyfish) {
                this.killedByPufferfish = true;
                this.world.keyboard = false;
                this.activateDeathAnimation(animation);

            } else if (this.isHurt() && this.hittedByJellyfish) {
                this.playAnimation(this.IMGAES_HURT_SHOCKED);
            } else if (this.isHurt() && this.hittedByPufferfish) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.world.keyboard.SPACE) {
                this.activateSpace()
                this.playAnimation(this.IMAGES_FINSLAP);
                this.spaceAlreadyPressed = true;
            } else if (this.checkMovementKeyIsPressed() && !this.world.keyboard.D) {
                this.playAnimation(this.IMAGES_SWIMMING);

            } else if (this.noKeyIsPressed() && !this.isDead()) {
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

        setInterval(() => {
            if (this.world.keyboard.F && this.world.collectedBottles != 0) {
                this.activatePoisonAttack();
                this.playAnimation(this.IMAGES_POISON_ATTACK);
                this.attacked = true;
            }
        }, 60)
    }

    activateAttack() {
        if (!this.attacked) {
            this.currentImage = 0;
            let DIsPressed = setInterval(() => {
                this.attacked = true;
                this.world.keyboard.D = true;
            }, 100)//60

            setTimeout(() => {
                
                clearInterval(DIsPressed)
                this.attacked = false;
                this.world.keyboard.D = false;
                this.world.shootNormalBubble();
            }, 500)//500
        }

    }

    activatePoisonAttack() {
        if (!this.attacked) {
            this.currentImage = 0;
            let DIsPressed = setInterval(() => {
                this.attacked = true;
                this.world.keyboard.F = true;
            }, 100)//60

            setTimeout(() => {
                
                clearInterval(DIsPressed)
                this.attacked = false;
                this.world.keyboard.F = false;
                this.world.shootPoisonBubble();
            }, 400)//500
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

    activateDeathAnimation(animation) {

        if (!this.checkAlreadyRunning) {
            this.checkAlreadyRunning = true;
            if (this.killedByJellyfish) {
                this.playShockedDeathAnimation(animation)
            } else if (this.killedByPufferfish) {
                this.playPoisenedDeathAnimation(animation)
            }
        }
    }

    playPoisenedDeathAnimation(animation) {
        this.currentImage = 0;
        let playDeath = setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD);
        }, 100);

        setTimeout(() => {
            this.swimUpAfterDeath();
        }, 600);

        setTimeout(() => {
            clearInterval(animation);
            clearInterval(playDeath);
            console.log('intervall ist gestoppt');
        }, 1200);
    }

    playShockedDeathAnimation(animation) {
        this.currentImage = 0;
        let playDeath = setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD_SHOCKED);
        }, 100)

        setTimeout(() => {
            this.dropAfterDeath();
        }, 600);

        setTimeout(() => {
            clearInterval(animation);
            clearInterval(playDeath);
            console.log('intervall ist gestoppt');
        }, 1000)
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

    dropAfterDeath() {
        let dropDown = setInterval(() => {
            if (this.y < 220) {
                this.y += this.speed;

            } else {
                clearInterval(dropDown)
            }
        }, 1000 / 60)
    }

    
}