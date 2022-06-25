class Healthbar extends DrawableObject{


    IMAGES = [
        'img/4. Marcadores/Purple/0_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/Purple/100_ .png',
    ];

    percentage = 100;

    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 15;
        this.y = 0;
        this.width = 180;
        this.height = 50;
        this.setPercentage(100);
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path]

    }

    resolveImageIndex(){
        if(this.percentage == 100){
            return 5
        }else if(this.percentage > 80){
            return 4
        }else if(this.percentage > 60){
            return 3
        }else if(this.percentage > 40){
            return 2
        }else if(this.percentage >= 20 || this.percentage <= 20 && !this.percentage == 0){
            return 1
        }else if(this.percentage == 0) {
            return 0
        }
    }

}