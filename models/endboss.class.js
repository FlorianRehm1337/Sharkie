class Endboss extends MovableObject {

    height = 300;
    width = 300;
    y = 0;
    status;
    speed = 5;

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
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png',
    ]

    introAlreadyPlayed = false;
    deadAlreadyPlayed = false;
    introCounter = 0;
    deadCounter = 0;
    world;
    attacking = false;
    timepassedlastAttack;
    lastAttack = 0;
    hadFirstContact = false;
    collidedWithWall = false;

    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/2.floating/0.png');
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_POISONED);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACKING);
        setTimeout(() => {
            this.animate();
        }, 1000);
        this.x = 2800; //2800
        /*          */
    }

    animate() {
        let i = 0;
        let animation = setInterval(() => {

            if (i < 10 && this.hadFirstContact) { //!this.introAlreadyPlayed
                this.playAnimation(this.IMAGES_INTRODUCE);
            } else if (this.isDead() && !this.deadAlreadyPlayed) {
                this.startDeadCounter();
                clearInterval(animation);
            } else if (this.status == 'poisoned') {
                this.playAnimation(this.IMAGES_POISONED);
            } else if (!this.startAttack() && this.introAlreadyPlayed && this.status != 'poisoned' && !this.attacking) {
                this.playAnimation(this.IMAGES_SWIMMING);
            } else if (this.startAttack() && this.introAlreadyPlayed) {
                this.startAttackAnimation();
                this.lastAttack = new Date().getTime();
            }
            i++;

            if (this.world.character.x > 2450 && !this.hadFirstContact) { //2450


                this.hadFirstContact = true;
                this.world.character.speed = 0;
                this.world.level.backgroundObjects[1].forEach(background => {
                    background.speed = 0;
                });
                this.world.level.backgroundObjects.splice(0,1);
                let disable = setInterval(() =>{
                    this.world.character.noKeyIsPressed();
                },100)
                setTimeout(() =>{
                    clearInterval(disable);
                    this.world.character.speed = 8;
                    console.log(this.world.backgroundObjects)
                },800)
               
                this.currentImage = 0;
                i = 0;
                this.introAlreadyPlayed = true;
                this.world.character.reachedEndboss = true;
                this.world.level.level_end_x = 2800;
                setTimeout(() => {
                    this.startMovement();
                    this.checkBossMovement();
                    this.swimVerticalDown();
                }, 800);
            }
        }, 100);

    }

    addIntroCounter() {
        let introInterval = setInterval(() => {
            this.introCounter++;
            this.playAnimation(this.IMAGES_INTRODUCE);
            if (this.introCounter == this.IMAGES_INTRODUCE.length - 1 || this.introCounter > this.IMAGES_INTRODUCE) {
                clearInterval(introInterval);
                this.introAlreadyPlayed = true;

            }
        }, 100);
    }

    startDeadCounter() {
        let deadInterval = setInterval(() => {
            this.deadCounter++;
            this.playAnimation(this.IMAGES_DEAD);
            if (this.deadCounter == this.IMAGES_DEAD.length - 1) {
                clearInterval(deadInterval);
                this.deadAlreadyPlayed = true;
                this.loadImage(this.IMAGES_DEAD[4]);
                this.swimUpAfterDeath();
                this.world.endbossHealthbar.offset.top = 50
            }
        }, 100);
    }

    startAttack() {

        let timepassedlastAttack = new Date().getTime() - this.lastAttack; //Difference in ms
        timepassedlastAttack = timepassedlastAttack / 1000; //Difference in s
        this.timepassedlastAttack = timepassedlastAttack;
        return timepassedlastAttack > 2;
    }

    startAttackAnimation() {
        this.currentImage = 0;
        if (!this.attacking) {
            let attack = setInterval(() => {
                this.attacking = true;
                this.playAnimation(this.IMAGES_ATTACKING);
            }, 100)
            setTimeout(() => {
                this.attacking = false;
                clearInterval(attack)
            }, 600)
        }
    }

    startMovement() {

        setInterval(() => {
            if (!this.isDead()) {
                if (!this.collidedWithWall) {
                    this.x -= this.speed;
                } else if (this.collidedWithWall) {
                    this.x += this.speed;
                }
            }

        }, 1000 / 60);

    }

    checkBossMovement() {
        setInterval(() => {
            if (!this.isDead()) {

                if (this.isColliding(this.world.level.barriers[0])) {
                    this.collidedWithWall = true;
                    this.otherDirection = true;
                } else if (this.x > 3000) {
                    this.collidedWithWall = false;
                    this.otherDirection = false;
                } else if (this.energy <= 50) {
                    this.speed = 10;
                }
            }

        }, 1000 / 60);
    }
}