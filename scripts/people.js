/*
* BOT CLASS FUNCTION
*/


class BublePeople{
    constructor(ctx,x,y, type=""){
        this.ctx = ctx
        this.x = x
        this.y = y
        
        this.select = false 
        this.speed = 2
        this.radius = 12


    

        this.hitBox = {
            x : this.x -this.radius,
            y : this.y -this.radius,
            h : this.radius*2,
            w : this.radius*2
        }


    }
    
    create(){


        this.ctx.save()        
        this.ctx.beginPath()
        this.ctx.fillStyle = "black"
        if(this.select){
            this.ctx.fillStyle = "orange"
        }
        this.ctx.arc(this.x, this.y, this.radius, 0,Math.PI*2)
        this.ctx.fill()
        this.ctx.restore()


    }

    mouve(x = this.x, y=this.y){

        if(this.select)
        {
            if(this.x !=x && this.y !=y){
                let direction = {
                    x:1,
                    y:1
                }
                if(x<this.x){
                    direction.x= -1
                }
                if(y<this.y){
                    direction.y= -1
                }
    
    
                this.x =  this.x +this.speed *direction.x
                this.y =  this.y +this.speed *direction.y
                this.hitBox.x = this.x-this.radius
                this.hitBox.y = this.y-this.radius
            }
            
        }
        
        this.create()
    }


}