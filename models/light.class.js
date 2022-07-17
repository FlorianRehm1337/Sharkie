class Light extends MovableObject {

    x;
    y = 0;
    width = 720;
    height = 480;

    constructor(img, x){
        super().loadImage(img);
        this.x = x;
    }

}