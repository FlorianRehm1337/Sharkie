class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 100;
    y = 250;
    height = 100;
    width = 150;


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

        /*         if (this.checkInstances()) {
                    ctx.beginPath();
                    ctx.lineWidth = '5';
                    ctx.strokeStyle = 'red';
                    ctx.rect(this.x + this.offset.x, this.y + this.offset.y,(this.x + this.width - this.offset.width) - (this.x + this.offset.x),(this.y + this.height - this.offset.height) - (this.y + this.offset.y));
                    ctx.stroke();
                }
        
                  if (this.checkInstances()) {
                    ctx.beginPath();
                    ctx.lineWidth = '5';
                    ctx.strokeStyle = 'blue';
                    ctx.rect(this.x, this.y, this.width , this.height );
                    ctx.stroke();
                }  */
    }

    checkInstances() {
        return this instanceof Character ||
            this instanceof Endboss ||
            this instanceof Pufferfish_Green ||
            this instanceof Pufferfish_Orange ||
            this instanceof Pufferfish_Red ||
            this instanceof JellyFish_Green ||
            this instanceof JellyFish_Pink ||
            this instanceof JellyFish_Yellow ||
            this instanceof JellyFish_Purple ||
            this instanceof Coin ||
            this instanceof PoisonBottle
    }

    
}