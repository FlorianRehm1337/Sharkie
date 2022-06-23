class MovableObject extends DrawableObject {

    speed = 0.35;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    isTimePassed = false;
    spawnTime = new Date().getTime();

    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    }


    isColliding(mo) {
        return this.isHorizontalIntersection(mo) && this.isVerticalIntersection(mo);
        
        /* !(mo.y + mo.offset.y > this.y + this.height - this.offset.height + this.offset.y ||
            mo.y + mo.height - mo.offset.height + mo.offset.y < this.y + this.offset.y) &&
            !(mo.x + mo.offset.x > this.x + this.width - this.offset.width + this.offset.x ||
                mo.x + mo.width - mo.offset.width + mo.offset.x < this.x + this.offset.x) */
    }

    isHorizontalIntersection(mo){
        return !(this.isLeftSide(mo) || this.isRightSide(mo));
    }

    isVerticalIntersection(mo){
        return !(this.isAbove(mo) || this.isBelow(mo));
    }

    isAbove(mo){
        return !(this.getHitBoxBottomPos() > mo.getHitBoxTopPos());
    }

    isBelow(mo){
        return !(this.getHitBoxTopPos() < mo.getHitBoxBottomPos());
    }

    isLeftSide(mo){
        return !(this.getHitBoxRightPos() > mo.getHitBoxLeftPos());
    }

    isRightSide(mo){
        return !(this.getHitBoxLeftPos() < mo.getHitBoxRightPos());
    }

    getHitBoxRightPos(){
        return this.x + this.width - this.offset.width;
    }

    getHitBoxLeftPos(){
        return this.x + this.offset.x;
    }

    getHitBoxTopPos(){
        return this.y + this.offset.y;
    }

    getHitBoxBottomPos(){
        return this.y + this.height - this.offset.height;
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms
        timepassed = timepassed / 1000; //Difference in s
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    swimVerticalDown(height) {

        let swimDown = setInterval(() => {
            if (this instanceof JellyFish_Pink || this instanceof JellyFish_Green) {
                this.y -= 4;
            } else {
                this.y -= 2;
            }

            if (this.y < 0) { //wenn y kleiner als 0 ist (er schwimmt oben raus) ,dann schwimm runter
                clearInterval(swimDown)
                this.swimVerticalUp(height);
            }
        }, 1000 / 60);
    }

    swimVerticalUp(height) {

        let swimUp = setInterval(() => {
            if (this instanceof JellyFish_Pink || this instanceof JellyFish_Green) {
                this.y += 4;
            } else {
                this.y += 2;
            }
            if (this.y + this.height > 480) { //wenn y größer ist als 400 (er schwimmt unten raus), dann schwimm hoch
                clearInterval(swimUp)
                this.swimVerticalDown(height);
            }
        }, 1000 / 60);
    }

    swimLeft() {
        this.otherDirection = true;
        let swimLeft = setInterval(() => {
            this.x += this.speed;
            if (!this.isTimePassed) {
                clearInterval(swimLeft)
                this.swimRight();
            }


        }, 1000 / 60);
    }

    swimRight() {
        this.otherDirection = false;
        let swimRight = setInterval(() => {
            this.x -= this.speed;
            if (this.isTimePassed) {
                clearInterval(swimRight)
                this.swimLeft();
            }
        }, 1000 / 60);
    }

    checkTime() {
        setInterval(() => {
            let spawnTimePassed = new Date().getTime() - this.spawnTime;
            spawnTimePassed = spawnTimePassed / 1000;
            if (spawnTimePassed >= 5) {
                this.spawnTime = new Date().getTime();
                if (this.isTimePassed == false) {
                    this.isTimePassed = true;
                } else if (this.isTimePassed == true) {
                    this.isTimePassed = false;
                }
            }
        }, 100);
    }

}