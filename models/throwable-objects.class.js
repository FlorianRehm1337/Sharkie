class ThrowableObject extends MovableObject{

    type;
    hittedEndboss = false;
    constructor(x,y,characterDirection,img,type){
        super().loadImage(img);
        this.type = type;
        this.x = x;
        this.y = y;
        this.characterDirection = characterDirection;
        this.width = 40;
        this.height = 40;
        this.throw();
        console.log(this.type);
    }

    throw(){
        
        if(!this.characterDirection){
            setInterval(() =>{
                this.x += 12;
                this.loopBubble();
                
            }, 25)
        }else if (this.characterDirection){
            this.x -= 200;
            setInterval(() =>{
                this.x -= 12;
            }, 25)
        }
        
    }

    loopBubble(){
        
      this.BubbleUp()
        
        

    }

    BubbleUp(){
        let bubbleUp = setInterval(() =>{
            this.y -= 5;
        },200)
        setTimeout(()=>{
            clearInterval(bubbleUp);

        },2000);
    }
}