const tree = ()=>{
    console.log('tree')
}

const forest = ()=>{
    const setPoint = Math.floor(Math.random()*3)+3
    let firstPoint = {
        x : null,
        y : null
    }
    let tempPoint = {
        x : null,
        y : null
    }

    ctx.beginPath()
    for(let i = 0; i<setPoint; i++){
        if(i ===0){
            firstPoint.x = Math.floor(Math.random()*canvaDimension.width)        
            firstPoint.y = Math.floor(Math.random()*canvaDimension.height)        
        }
    }

}

class Mapping{
    constructor(ctx, x,y, ratio=1,){
        this.x = x
        this.y = y
        this.ratio = ratio
        this.ctx = ctx

        /*
        * Texture
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
        * GENERAL DATA MAPPING
        */
        this.tree = [] //table of object like: {x:,y:,quantity:}


    }

    /*
    * Sub build parts
    */
    tree(){

        this.ctx.strokeStyle ='black'
        this.ctx.beginPath()
        this.ctx.moveTo(100,100)
        this.ctx.bezierCurveTo(150,150,250,150,300,100)
        this.ctx.stroke()

    }

    rock(){

    }

    golderShower(){

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