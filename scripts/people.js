/*
* BOT CLASS FUNCTION
*/


class People{
    constructor(ctx,x,y,ratio, categorie=""){ // type possible values :"Villager"/"Archer"/"Piquier"/"Charette" (Name will be changed soon)
        this.ctx = ctx
        this.x = x
        this.y = y
        this.ratio = ratio

        this.type = categorie
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

            case 'Piquier' :
                this.prop.damages = 30
                this.prop.resistance = 20
                this.prop.build = false
                this.prop.life = 120

                break

            case 'Charette' :
                this.prop.damages = 4
                this.prop.resistance = 12 
                this.prop.build = true
                this.prop.life = 50
                break

            default :
        }


    }
    




}