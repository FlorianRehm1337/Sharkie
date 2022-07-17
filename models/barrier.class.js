class Barrier extends MovableObject{

    IMAGES = [
        'img/3. Background/Barrier/1.png',
        'img/3. Background/Barrier/2.png',
        'img/3. Background/Barrier/3.png'
    ];
    width = 300;
    height = 480;
    x;
    y;

    constructor(img,x,y){
        super().loadImage(img);
        this.loadImages(this.IMAGES);
        this.y = y;
        this.x = x;
    }
}