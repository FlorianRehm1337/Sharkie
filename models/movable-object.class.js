class MovableObject extends DrawableObject {

    speed = 0.35;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
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

    moveRight() {
        console.log('moveing right')
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }

    swimVerticalDown(height) {

        let swimDown = setInterval(() => {
            if (this instanceof JellyFish_Pink || this instanceof JellyFish_Green) {
                this.y -= 4;
            } else {
                this.y -= 2;
            }

            if (this.y < 0) { //wenn y kleiner als 0 ist (er schwimmt oben raus) ,dann schwimm runter
                console.log(this.y, 'fish schwimmt runter')
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
                console.log(this.y, 'fish schwimmt hoch')
                clearInterval(swimUp)
                this.swimVerticalDown(height);
            }
        }, 1000 / 60);
    }
}