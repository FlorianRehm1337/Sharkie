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

    world;
    assets;
    checkAlreadyRunning = false;
    spaceAlreadyPressed = false;
    attacked = false;
    hittedByJellyfish = false;
    hittedByPufferfish = false;
    killedByJellyfish = false;
    killedByPufferfish = false;
    reachedEndboss = false;
    barrierLeft = false;
    barrierRight = false;

    constructor(world,assets) {
        
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.world = world;
        this.assets = assets;
        this.x = 0;
        this.loadImages(this.assets.IMAGES_SWIMMING);
        this.loadImages(this.assets.IMAGES_DEAD_SHOCKED);
        this.loadImages(this.assets.IMAGES_DEAD);
        this.loadImages(this.assets.IMAGES_HURT);
        this.loadImages(this.assets.IMGAES_HURT_SHOCKED);
        this.loadImages(this.assets.IMAGES_FINSLAP);
        this.loadImages(this.assets.IMAGES_IDLE);
        this.loadImages(this.assets.IMAGES_NORMAL_ATTACK);
        this.loadImages(this.assets.IMAGES_POISON_ATTACK);
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.world.audios.characterMove.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.barrierRight) {
                this.world.keyboard.LEFT = false;
                this.x += this.speed;
                this.otherDirection = false;
                this.world.audios.characterMove.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0 && !this.barrierLeft) {
                this.world.keyboard.RIGHT = false;
                this.x -= this.speed;
                this.otherDirection = true;
                this.world.audios.characterMove.play();
            }

            if (this.world.keyboard.UP && this.y > -115) { 
                this.y -= this.speed;
                this.world.audios.characterMove.play();
            }

            if (this.world.keyboard.DOWN && this.y < 285) {
                this.y += this.speed;
                this.world.audios.characterMove.play();
            }

            this.world.camera_x = -this.x + 50;
        }, 1000 / 60);

        let animation = setInterval(() => {

            if (this.isDead() && this.hittedByJellyfish && !this.hittedByPufferfish) {
                this.killedByJellyfish = true;
                document.getElementById('tryagain-btn').classList.remove('d-none');
                this.world.keyboard = false;
                this.world.audios.bossBackground.pause();
                this.world.audios.loose.play();
                this.activateDeathAnimation(animation);

            } else if (this.isDead()) {
                this.killedByPufferfish = true;
                document.getElementById('tryagain-btn').classList.remove('d-none');
                this.world.keyboard = false;
                this.world.audios.bossBackground.pause();
                this.world.audios.loose.play();
                this.activateDeathAnimation(animation);

            } else if (this.isHurt() && this.hittedByJellyfish) {
                this.playAnimation(this.assets.IMGAES_HURT_SHOCKED);
            } else if (this.isHurt() && this.hittedByPufferfish) {
                this.playAnimation(this.assets.IMAGES_HURT);
            } else if (this.world.keyboard.SPACE) {
                this.activateSpace()
                this.playAnimation(this.assets.IMAGES_FINSLAP);
                this.spaceAlreadyPressed = true;
            } else if (!this.world.keyboard.D && this.checkMovementKeyIsPressed()) {
                this.playAnimation(this.assets.IMAGES_SWIMMING);

            } else if (this.noKeyIsPressed() && !this.isDead()) {
                this.playAnimation(this.assets.IMAGES_IDLE);
            }

        }, 100);

        setInterval(() => {
            if (this.world.keyboard.D) {
                this.activateAttack();
                this.playAnimation(this.assets.IMAGES_NORMAL_ATTACK);
                this.attacked = true;
            }
        }, 60)

        setInterval(() => {
            if (this.world.keyboard.F && this.world.collectedBottles != 0) {
                this.activatePoisonAttack();
                this.playAnimation(this.assets.IMAGES_POISON_ATTACK);
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
            }, 100)

            setTimeout(() => {
                
                clearInterval(DIsPressed)
                this.attacked = false;
                this.world.keyboard.D = false;
                this.world.shootNormalBubble();
            }, 500)
        }

    }

    activatePoisonAttack() {
        if (!this.attacked) {
            this.currentImage = 0;
            let DIsPressed = setInterval(() => {
                this.attacked = true;
                this.world.keyboard.F = true;
            }, 100)

            setTimeout(() => {
                
                clearInterval(DIsPressed)
                this.attacked = false;
                this.world.keyboard.F = false;
                this.world.shootPoisonBubble();
            }, 400)
        }

    }

    activateSpace() {

        if (!this.checkAlreadyRunning) {
            this.currentImage = 0;
            let spacePressed = setInterval(() => {
                this.world.keyboard.SPACE = true;
                this.checkAlreadyRunning = true;
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
            this.playAnimation(this.assets.IMAGES_DEAD);
        }, 100);

        setTimeout(() => {
            this.swimUpAfterDeath();
        }, 600);

        setTimeout(() => {
            clearInterval(animation);
            clearInterval(playDeath);
        }, 1200);
    }

    playShockedDeathAnimation(animation) {
        this.currentImage = 0;
        let playDeath = setInterval(() => {
            this.playAnimation(this.assets.IMAGES_DEAD_SHOCKED);
        }, 100)

        setTimeout(() => {
            this.dropAfterDeath();
        }, 600);

        setTimeout(() => {
            clearInterval(animation);
            clearInterval(playDeath);
        }, 1000)
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