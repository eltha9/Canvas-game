const canva = document.querySelector('.frame')
const ctx = canva.getContext('2d')

//Global variable for this file
let globalProp = [] 
const canvaDimension = {
    width: window.innerWidth,
    height: window.innerHeight
}

const posMouse = {
    x : null,
    y : null
}

const posLeft = {
    x : null,
    y : null,
    state : false // mouse up on false
}
const posLeftClick = {
    x: null,
    y : null
}
const posRightClick = {
    x:null,
    y: null,
    state : false
}
const posSelect ={
    x: null, //position X of the selection 
    y : null,
    w : null,
    h : null
}
let tempClick = false

//##### GLOBAL FUNCTION #########
const resize= ()=>{
    canvaDimension.width= window.innerWidth
    canvaDimension.height= window.innerHeight

    canva.width = canvaDimension.width
    canva.height = canvaDimension.height
}

//clear function 
const clear =()=>
{
    ctx.beginPath()
    ctx.fillStyle ="white"
    ctx.rect(0,0,canvaDimension.width, canvaDimension.height)
    ctx.fill()
}
//selection function 
const selection= ()=>{

    //calc selction area
    posSelect.x =posLeft.x
    posSelect.y =posLeft.y
    posSelect.w =posMouse.x- posLeft.x
    posSelect.h =posMouse.y- posLeft.y

    //beautify selection
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = "hsl(53, 91%, 50%)"
    ctx.strokeStyle= "hsl(53, 63%, 70%)"
    ctx.rect(posSelect.x,posSelect.y,posSelect.w,posSelect.h)
    ctx.stroke()
    ctx.globalAlpha = 0.3
    ctx.fill()
    ctx.restore()

    for(let i =0; i<globalProp.length; i++)
    {
        if( (globalProp[i].hitBox.x >=posSelect.x && globalProp[i].hitBox.x <= posMouse.x) || (globalProp[i].hitBox.x <=posSelect.x && globalProp[i].hitBox.x >= posMouse.x) ){
            if( (globalProp[i].hitBox.y >=posSelect.y && globalProp[i].hitBox.y <= posMouse.y) || (globalProp[i].hitBox.y <=posSelect.y && globalProp[i].hitBox.y >= posMouse.y) ){
                globalProp[i].select = true

                
            }
            
        }
    }
    
}


//####EVENT ON CANVAS#####
// mouse move
canva.addEventListener('mousemove', (event)=>{
    posMouse.x = event.clientX
    posMouse.y = event.clientY
    
})

//left down/up

canva.addEventListener('mousedown', (event)=>{
    posLeft.x = event.clientX
    posLeft.y = event.clientY
    
    
    posLeft.state = true
    
})

canva.addEventListener('mouseup', ()=>{
    posLeft.state = false 
    tempClick = true
    
    posRightClick.state = false


})
//left click
canva.addEventListener('click', (event)=>{
    posLeftClick.x = event.clientX
    posLeftClick.y = event.clientY


})

//right click
canva.addEventListener('contextmenu', (event)=>{
    event.preventDefault()
    
    posRightClick.x = event.clientX
    posRightClick.y = event.clientY
    posRightClick.state = true
    console.log( posRightClick.x, posRightClick.y)

})
//resize event 
window.addEventListener('resize', ()=>{
    resize()

})



/*
*   MAIN FUNCTION
*/ 
resize()



for(let i=0; i <20; i++){
    const buble= new BublePeople(ctx, Math.random()* canvaDimension.width,Math.random()* canvaDimension.height,"Wagon")    
    buble.create()
    globalProp.push(buble)
}



/*
*   MAIN LOOP 
*/
const main = ()=>{
    window.requestAnimationFrame(main)
    clear()
    // for(let i=0; i<globalProp.length; i++){
    //     globalProp[i].mouve()
    // }

    if(posRightClick.state){
        console.log('yep')
        for(let i=0; i<globalProp.length; i++){
            if(globalProp[i].select){
                globalProp[i].mouve(posRightClick.x,posRightClick.y)
            }
            else{
                globalProp[i].mouve()
            }
            
            if(globalProp[i].x == posRightClick.x && globalProp[i].y == posRightClick.y ){
                posRightClick.state = false
            }else{
                posRightClick.state = true
            }

        }
    }else{
        for(let i=0; i<globalProp.length; i++){
            globalProp[i].mouve()
        }
    }


    if(posLeft.state){
        selection()
    }
    if(tempClick && posLeft.state){
        for(let i=0; i<globalProp.length; i++){
            globalProp[i].select = false
        }
        tempClick = false

    }
     
    

}

main()

