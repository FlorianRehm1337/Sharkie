class ThrowableObject extends MovableObject{

    constructor(x,y,characterDirection){
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.characterDirection = characterDirection;
        this.width = 40;
        this.height = 40;
        this.throw()
    }

    throw(){
        
        if(!this.characterDirection){
            setInterval(() =>{
                this.x += 10;
            }, 25)
        }else if (this.characterDirection){
            this.x -= 200;
            setInterval(() =>{
                this.x -= 10;
            }, 25)
        }
        
    }
}