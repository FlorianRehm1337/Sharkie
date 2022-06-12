class JellyFish_Green extends MovableObject{
    
    width = 125;
    height = 125;
    
    IMAGES = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
    ];

    constructor(x){
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
        this.loadImages(this.IMAGES);
        this.y = Math.random() * ((450 - this.height) - 20 + 20);
        this.x = x;
        this.swimVerticalDown(this.height);
        this.animate();
    }


   animate(){
    setInterval(() => {
        this.playAnimation(this.IMAGES);
    }, 100);
        
   }
}