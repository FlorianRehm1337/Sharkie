class BonusHealthbar extends DrawableObject{


    IMAGES = [
        'img/4. Marcadores/green/Life/0_  copia 3.png',
        'img/4. Marcadores/green/Life/20_ copia 4.png',
        'img/4. Marcadores/green/Life/40_  copia 3.png',
        'img/4. Marcadores/green/Life/60_  copia 3.png',
        'img/4. Marcadores/green/Life/80_  copia 3.png',
        'img/4. Marcadores/green/Life/100_  copia 2.png',
    ];

    percentage = 120;

    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 15;
        this.y = 0;
        this.width = 180;
        this.height = 50;
        this.setPercentage(120);
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path]

    }

    resolveImageIndex(){
        if(this.percentage == 200){
            return 5
        }else if(this.percentage >= 180){
            return 4
        }else if(this.percentage >= 160){
            return 3
        }else if(this.percentage >= 140){
            return 2
        }else if(this.percentage >= 120){
            return 1
        }else {
            return 0
        }
    }

}