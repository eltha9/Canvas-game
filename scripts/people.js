/*
* BOT CLASS FUNCTION
*/


class BublePeople{
    constructor(ctx,x,y, type=""){
        this.ctx = ctx
        this.x = x
        this.y = y
        
        this.select = false 
        this.speed = 1
        

        this.prop = {
            damages: null, //int
            resistance: null, ///int
            build: undefined, // bollean
            life: null//int

        }

    

        this.hitBox = {
            x : this.x -20,
            y : this.y -20,
            h : 20*2,
            w : 20*2
        }


    }
    
    create(){


        this.ctx.save()        
        this.ctx.beginPath()
        this.ctx.fillStyle = "black"
        if(this.select){
            this.ctx.fillStyle = "orange"
        }
        this.ctx.arc(this.x, this.y, 20, 0,Math.PI*2)
        this.ctx.fill()
        this.ctx.restore()

    }

    mouve(x, y){

        if(this.select && posRightClick.state)
        {

            this.x -=this.speed 
            this.y -=this.speed
        }
        
        this.create()
    }


}