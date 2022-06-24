class Coinbar extends DrawableObject{
    

    IMAGES = [
        'img/4. Marcadores/orange/0_  copia 2.png',
        'img/4. Marcadores/orange/20_  copia.png',
        'img/4. Marcadores/orange/40_  copia 2.png',
        'img/4. Marcadores/orange/60_  copia 2.png',
        'img/4. Marcadores/orange/80_  copia 2.png',
        'img/4. Marcadores/orange/100_ copia 2.png',
    ];

    coins = 0;

    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 270;
        this.y = 0;
        this.width = 180;
        this.height = 50;
        this.setCollectedCoins(0);
    }

    setCollectedCoins(coin){
        this.coins = coin;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path]

    }

    resolveImageIndex(){
        if(this.coins == 10){
            return 5
        }else if(this.coins > 7){
            return 4
        }else if(this.coins > 5){
            return 3
        }else if(this.coins > 3){
            return 2
        }else if(this.coins > 1){
            return 1
        }else {
            return 0
        }
    }

}