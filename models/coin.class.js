class Coin extends MovableObject {
    width = 50;
    height = 50;
    x = 100;
    y = 100;

    IMAGES_COIN = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',
        'img/4. Marcadores/1. Coins/5.png',
        'img/4. Marcadores/1. Coins/6.png',
        'img/4. Marcadores/1. Coins/5.png',
        'img/4. Marcadores/1. Coins/4.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/1.png',
    ];
    
    constructor(x){
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_COIN);
        this.x = x;
        this.y = Math.random() * 200 + 150;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 30);
    }
}

