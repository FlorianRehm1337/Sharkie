class JellyFish_Yellow extends MovableObject{
   
    width = 100;
    height = 100;
    offset = {
        x: 10,
        y: 10,
        width: 25,
        height: 25,
    }
   
    IMAGES = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
        
    ];

    swimDown = false;

    constructor(x){
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.loadImages(this.IMAGES);
        this.y = Math.random() * ((450 - this.height) - 20 + 20);
        this.x = x
        this.animate();
        //this.swimVerticalDown(this.height);
    }


   animate(){
    setInterval(() => {
        this.playAnimation(this.IMAGES);
    }, 100);  
   }
}