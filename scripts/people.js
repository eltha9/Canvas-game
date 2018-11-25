/*
* PROP CLASS FUNCTION
*/


class BublePeople{
    constructor(ctx,x,y, type="normal"){ // type can be normal or spec
        this.ctx = ctx
        this.x = x
        this.y = y
        this.first ={
            x:this.x,
            y:this.y
        }
        this.type = type
        this.select = false 
        this.speed = 2
        this.radius = 12

        //hit box for the selection
        this.hitBox = {
            x : null,
            y : null,
            h : null,
            w : null
        }

        switch(this.type){
            case "spec": 
                this.hitBox.x = this.x -this.radius
                this.hitBox.y = this.y -this.radius
                this.hitBox.h = this.radius*2
                this.hitBox.w = this.radius*2
                break
            default:
                this.hitBox.x = this.x -this.radius
                this.hitBox.y = this.y -this.radius
                this.hitBox.h = this.radius*2
                this.hitBox.w = this.radius*2

        }
    
        //tree texture
        this.treeTexture ={
            trunk: "hsl(20, 63%, 30%)", //dark brown
            leaves: "hsl(104, 81%, 24%)", //green like frogs, not like frenchies 
            darkLeaves: "hsl(104, 81%, 18%)" // dark green
        }

    }
    
    create(){// create a unique and wonderfull and static buble (you can move it by calling mouve method)

        switch(this.type){
            case "spec":
                this.tree(this.x, this.y,2)
                break
            default:
                this.bubule()
        }
        
        

    }

    mouve(x = this.x, y=this.y){ // mouving method of the class, mouve the objet et x and y point of the canvas

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
    bubule(){
        this.ctx.fillStyle ="black"
        this.ctx.save()        
        this.ctx.beginPath()
        this.ctx.fillStyle = "black"
        if(this.select){
            this.ctx.fillStyle = "orange"
        }
        this.ctx.arc(this.x, this.y, this.radius, 0,Math.PI*2)
        this.ctx.fill()
        this.ctx.restore()
        this.ctx.fillStyle ="black"
    }
    
    tree(x=0,y=0, ratio =1){ //x and y top left of the box 
        this.ctx.fillStyle ="black"
        this.ctx.save()


        //trunk
        this.ctx.fillStyle = this.treeTexture.trunk
        this.ctx.strokeStyle = 'black'
        if(this.select){
            this.ctx.strokeStyle = "orange"
        }
        this.ctx.rect(2*ratio+x,8*ratio+y,3*ratio,4*ratio)
        this.ctx.fill()
        this.ctx.stroke()

        //leaves
        this.ctx.fillStyle = this.treeTexture.darkLeaves
        this.ctx.lineWidth = 1.5
        this.ctx.strokeStyle = this.treeTexture.leaves
        if(this.select){
            this.ctx.strokeStyle = "orange"
        }
        this.ctx.beginPath()
        this.ctx.moveTo(0*ratio+x,8*ratio+y)
        this.ctx.lineTo(4*ratio+x,0*ratio+y)
        this.ctx.lineTo(7*ratio+x,8*ratio+y)
        this.ctx.bezierCurveTo(4*ratio+x,10*ratio+y,3*ratio+x,10*ratio+y,0*ratio+x,8*ratio+y)
        this.ctx.fill()
        this.ctx.stroke()

        //leaves separation 1 down
        this.ctx.lineWidth = 2

        this.ctx.globalCompositeOperation = 'source-atop'
        this.ctx.beginPath()
        this.ctx.moveTo(1*ratio+x,5*ratio+y)
        this.ctx.bezierCurveTo(3*ratio+x,6*ratio+y,4*ratio+x,6*ratio+y,6*ratio+x,5*ratio+y)
        this.ctx.stroke()

        //leaves separation 2 up
        this.ctx.globalCompositeOperation = 'source-atop'
        this.ctx.beginPath()
        this.ctx.moveTo(2*ratio+x,2*ratio+y)
        this.ctx.bezierCurveTo(3.5*ratio+x,3*ratio+y,4.5*ratio+x,3*ratio+y,6*ratio+x,2*ratio+y)
        this.ctx.stroke()

        this.ctx.restore()
        this.ctx.fillStyle ="black"
    }
}