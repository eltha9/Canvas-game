class Mapping{
    constructor(ctx,width,height, ratio=1){
        this.width = width
        this.height = height
        this.ratio = ratio
        this.ctx = ctx

        /*
        * TEXTURE
        */
        //soil texture
        this.soilTexture = {
            sand : "hsl(35, 57%, 75%)", // sort of dark yellow
            grass: "hsl(95, 43%, 45%)" // green like earth... yeah earth is green
        }
        //rock texture
        this.rockTexture = {
            rock: {
                primary: "hsl(240, 5%, 69%)", //dark grey
                secondary: "hsl(0, 0%, 49%)", // lite grey
                ternary: "hsl(240, 5%, 69%)" //lite grey
            },
            gold: {
                primary: "hsl(240, 5%, 69%)", //dark grey
                secondary: "hsl(0, 0%, 49%)", //lite grey
                ternary: "hsl(49, 93%, 68%)" // gold, it's a color that make you think you are rich
            }
        }
        //tree texture
        this.treeTexture ={
            trunk: "hsl(20, 63%, 30%)", //dark brown
            leaves: "hsl(104, 81%, 24%)", //green like frogs, not like frenchies 
            darkLeaves: "hsl(104, 81%, 18%)" // dark green
        }

        /*
        * HIT BOX'S
        */
       this.hitBox = {
           rock: {
               w: undefined, // width of the box
               h: undefined  // height of the box
           },
           tree: {
               w: undefined,
               h: undefined
           }
       }



        /*
        * GENERAL DATA MAPPING
        */
        this.trees = [] //table of object like: {x:,y:,quantity:}
        this.rocks = [] //table of object like: {x:,y:,quantity:}
        this.golds = [] //table of object like: {x:,y:,quantity:}


    }

    /*
    * Sub build parts
    */
    tree(x=0,y=0, ratio =1){ //x and y top left of the box 
        this.ctx.save()


        //trunk
        this.ctx.fillStyle = this.treeTexture.trunk
        this.ctx.strokeStyle = 'black'

        this.ctx.rect(2*ratio+x,8*ratio+y,3*ratio,4*ratio)
        this.ctx.fill()
        this.ctx.stroke()

        //leaves
        this.ctx.fillStyle = this.treeTexture.darkLeaves
        this.ctx.lineWidth = 1.5
        this.ctx.strokeStyle = this.treeTexture.leaves

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
    }

    rock(){

    }

    goldenShower(){

    }
    /*
    * General build parts
    */ 
    forest(){

    }

    rocks(){

    }

    /*
    * Main build method 
    */
    create(){
        
    }

    
    //possible 
    collision(){
        console.log('oh bah merde')
    }



}
