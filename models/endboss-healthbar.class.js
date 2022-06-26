class EndbossHealthbar extends DrawableObject{


    IMAGES = [
        'img/4. Marcadores/red/0_endboss.png',
        'img/4. Marcadores/red/20_endboss.png',
        'img/4. Marcadores/red/40_endboss.png',
        'img/4. Marcadores/red/60_ endboss.png',
        'img/4. Marcadores/red/80_endboss.png',
        'img/4. Marcadores/red/100_endboss.png',
    ];

    offset= {
        left: 0,
        right: 0,
        top: 30,
        bottom: 0,
    }

    percentage = 100;
    world;
    x;
    y;

    constructor(world){
        super();
        this.world = world;
        this.loadImages(this.IMAGES);
        this.width = 280;
        this.height = 75;
        this.setPercentage(100);
        this.getWorld();
        
    }

    async getWorld(){
        await this.world;
        setInterval(()=>{
            this.x = this.world.level.endboss[0].x + this.offset.left;
            this.y = this.world.level.endboss[0].y + this.offset.top;
        },1000 / 60)
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path]

    }

    resolveImageIndex(){
        if(this.percentage >= 100){
            return 5
        }else if(this.percentage >= 80){
            return 4
        }else if(this.percentage >= 60){
            return 3
        }else if(this.percentage >= 40){
            return 2
        }else if(this.percentage >= 20 || this.percentage <= 20 && !this.percentage == 0){
            return 1
        }else if(this.percentage == 0) {
            return 0
        }
    }

}