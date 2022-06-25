class Life extends MovableObject{
    width = 50;
    height = 50;
    x = 100;
    y = 100;

    IMAGES_LIFE = [
        'img/4. Marcadores/Hearts/green_heart_0.png',
        'img/4. Marcadores/Hearts/green_heart_1.png',
        'img/4. Marcadores/Hearts/green_heart_2.png',
        'img/4. Marcadores/Hearts/green_heart_3.png',
    ];
    
    constructor(x){
        super().loadImage('img/4. Marcadores/Hearts/green_heart_0.png');
        this.loadImages(this.IMAGES_LIFE);
        this.x = x;
        this.y = Math.random() * 200 + 150;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_LIFE);
        }, 110);
    }
}