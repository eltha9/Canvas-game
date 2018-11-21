/*
* BOT CLASS FUNCTION
*/


class People{
    constructor(ctx,x,y,ratio =1, categorie=""){ // Categorie possible values :"Villager"/"Archer"/"Pikeman"/"Wagon" (Name will be changed soon)
        this.ctx = ctx
        this.x = x
        this.y = y
        this.ratio = ratio

        this.type = categorie

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


    }
    
    create(x=0,y=0){
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.strokeStyle = "black"
        this.ctx.fillStyle ='orange'

        this.ctx.rect(x,y,40,60)
        this.ctx.restore()
        this.ctx.stroke()
        this.ctx.fill()
        


    }





}