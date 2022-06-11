class MovableObject {
    x = 100;
    y = 250;
    img;
    height = 100;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.35;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    loadImage(path) {
        this.img = new Image(); //same like this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)

    }

    drawFrame(ctx) {

        if (this.checkInstances()) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

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

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms
        timepassed = timepassed / 1000; //Difference in s
        return timepassed < 1;
    }

    isDead(){
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

    checkInstances() {
        return this instanceof Character ||
            this instanceof Endboss ||
            this instanceof Pufferfish_Green ||
            this instanceof Pufferfish_Orange ||
            this instanceof Pufferfish_Red
    }

}