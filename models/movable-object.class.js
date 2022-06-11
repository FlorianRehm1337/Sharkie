class MovableObject{
    x = 100;
    y = 250;
    img;
    height = 100;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.35;
    otherDirection = false;


    loadImage(path){
        this.img = new Image(); //same like this.img = document.getElementById('image') <img id="image">
        this.img.src = path; 
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    playAnimation(images){
        let i = this.currentImage % this.IMAGES_SWIMMING.length;
                let path = images[i];
                this.img = this.imageCache[path];
                this.currentImage++;
    }

    moveRight() {
        console.log('moveing right')
    }

    moveLeft(){
        setInterval(() =>{
            this.x -= this.speed;
        }, 1000/60)
    }

}