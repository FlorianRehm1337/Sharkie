class JellyFish_Purple extends MovableObject{
    
    width = 100;
    height = 100;
    offset = {
        x: 10,
        y: 10,
        width: 10,
        height: 10,
    }


    IMAGES = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
        
    ];

    constructor(x){
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.IMAGES);
        this.y = Math.random() * ((450 - this.height) - 20 + 20);
        this.x = x;
        //this.swimVerticalDown(this.height);
        this.animate();
    }


   animate(){
    setInterval(() => {
        this.playAnimation(this.IMAGES);
    }, 100);
        
   }
}