class PoisonBottle extends MovableObject{
    width = 50;
    height = 50;
    x = 100;
    y = 100;

    IMAGES_POISONBOTTLE = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png',
    ];
    
    constructor(x){
        super().loadImage('img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_POISONBOTTLE);
        this.x = x;
        this.y = 375 + 50 * Math.random();
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_POISONBOTTLE);
        }, 120);
    }
}


