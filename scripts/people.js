/*
* BOT CLASS FUNCTION
*/


class People{
    constructor(ctx,x,y,ratio =1, categorie=""){ // Categorie possible values :"Villager"/"Archer"/"Pikeman"/"Wagon" (Name will be changed soon)
        this.ctx = ctx
        this.x = x
        this.y = y
        this.ratio = ratio
        this.select = false 
        this.type = categorie
        this.speed = 2
        /*
        * PEOPLE SPEC BY TYPE
        */

        this.prop = {
            damages: null, //int
            resistance: null, ///int
            build: undefined, // bollean
            life: null//int

        }

        switch(this.type){
            case 'Villager' :
                this.prop.damages = 4
                this.prop.resistance = 8 
                this.prop.build = true
                this.prop.life = 50

                break

            case 'Archer' :
                this.prop.damages = 20
                this.prop.resistance = 12
                this.prop.build = false
                this.prop.life = 70

                break

            case 'Pikeman' :
                this.prop.damages = 30
                this.prop.resistance = 20
                this.prop.build = false
                this.prop.life = 120

                break

            case 'Wagon':
                this.prop.damages = 4
                this.prop.resistance = 12 
                this.prop.build = true
                this.prop.life = 120
                break

            default :
                //nada because i have no idea 
        }

        this.hitBox = {
            x: null, 
            y: null,
            w: null,
            h: null
        }

    }
    
    create(){
        this.ctx.save()        
        this.ctx.beginPath()
        this.ctx.fillStyle = "black"
        this.ctx.arc(this.x, this.y, 20, 0,Math.PI*2)
        this.ctx.fill()
        this.ctx.restore()

        this.hitBox.x = this.x -20
        this.hitBox.y = this.y -20
        this.hitBox.h = 20*2
        this.hitBox.w = 20*2

        if(this.select){
            this.ctx.save()
            this.ctx.strokeStyle = "red"
            this.ctx.beginPath()
            this.ctx.rect(this.hitBox.x,this.hitBox.y,this.hitBox.w,this.hitBox.h)
            this.ctx.stroke()
            this.ctx.restore()
        }


    }





}