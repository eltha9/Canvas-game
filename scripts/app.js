const canva = document.querySelector('.js-canvas') // just the DOM selection of the canvas
const ctx = canva.getContext('2d') // context of the canvas

/*
*   GLOBAL VARIABLE
*/
const canvaDimension = {// made the canvas great again
    width: window.innerWidth,
    height: window.innerHeight
}

let globalProp = []// contain all the prop in the canvas 
let tempClick = false
const maxProp = 6000


//all the varriable for the used for the mouse event's
const posMouse = { // for the mouse mouve
    x : null,
    y : null
}

const posLeft = { // for the "mouseup" and "mousedown"
    x : null,
    y : null,
    state : false // mouse up on false
}
const posLeftClick = {// mouse position for the left click
    x: null,
    y : null
}
const posRightClick = {//mouse position for the right click
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

/*
*   GLOBAL FUNCTION
*/
const resize= ()=>{// an important function
    canvaDimension.width= window.innerWidth
    canvaDimension.height= window.innerHeight

    canva.width = canvaDimension.width
    canva.height = canvaDimension.height
}

//clear function, a function who clear the canvas
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

    //beautify area of the selection
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = "hsl(53, 91%, 50%)"
    ctx.strokeStyle= "hsl(53, 63%, 70%)"
    ctx.rect(posSelect.x,posSelect.y,posSelect.w,posSelect.h)
    ctx.stroke()
    ctx.globalAlpha = 0.3
    ctx.fill()
    ctx.restore()

    for(let i =0; i<globalProp.length; i++)// basicly the main loop to konw wich prop will be selected
    {
        if( (globalProp[i].hitBox.x >=posSelect.x && globalProp[i].hitBox.x <= posMouse.x) || (globalProp[i].hitBox.x <=posSelect.x && globalProp[i].hitBox.x >= posMouse.x) ){
            if( (globalProp[i].hitBox.y >=posSelect.y && globalProp[i].hitBox.y <= posMouse.y) || (globalProp[i].hitBox.y <=posSelect.y && globalProp[i].hitBox.y >= posMouse.y) ){
                globalProp[i].select = true
                
                
            }
            
        }
    }
    
}



/*
*   EVENT'S ON CANVAS
*/
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
    
})
/*
*   Keyboards event's:
        -unselect
        -create a prop
        -select all
        -reset (it's kind of a reset, but more a go to the first position)
*/
window.addEventListener('keydown', (event)=>{
    if(event.keyCode ==27){// unselect the selected prop
        for(let i= 0; i< globalProp.length; i++)
        {
            globalProp[i].select = false
        }
        posRightClick.x = null
        posRightClick.y = null
    }
    
    
    if(event.keyCode == 78){// create a new prop with unique abilities (yep you will see)
        if(globalProp.length<maxProp)
        {
            const buble = new BublePeople(ctx, posMouse.x, posMouse.y, "spec")
            buble.create()
            globalProp.push(buble) 
        }else{
            console.log('Congratulation you reach the maximum prop limit')
            console.log(`For the safety of your computer and eyes, the maximum number of prop is ${maxProp} =/`)
        }        
    }
    if(event.keyCode == 17 || event.keyCode ==91){ // select all prop (work for mac cmd+a, linux & windows ctrl+a)
        window.addEventListener('keydown', (_event)=>{
            if(_event.keyCode == 65){
                for(let i= 0; i< globalProp.length; i++)
                {
                    globalProp[i].select = true
                }
            }
        })
        
    }
    if(event.keyCode==82){ // reset (work pressing the "r" key)
    
        for(let i= 0; i< globalProp.length; i++)
        {
            globalProp[i].x = globalProp[i].first.x
            globalProp[i].y = globalProp[i].first.y
            globalProp[i].hitBox.x = globalProp[i].first.x-globalProp[i].radius
            globalProp[i].hitBox.y = globalProp[i].first.y-globalProp[i].radius
        }
    }
    
    
})

//resize event 
window.addEventListener('resize', ()=>{
    resize()

})



/*
*   MAIN FUNCTION
*/ 
resize()


//create the first  prop's
for(let i=0; i <1000; i++){
    const villa = new BublePeople(ctx, Math.random()* canvaDimension.width,Math.random()* canvaDimension.height, "normal")    
    villa.create()
    globalProp.push(villa)
}


/*
*   MAIN LOOP 
*/
const main = ()=>{
    window.requestAnimationFrame(main)
    clear()//clear canvas
    for(let i=0; i<globalProp.length; i++){ // always drawing the prop's
        globalProp[i].mouve()
    }
    
    
    for(let i=0; i< globalProp.length; i++){//move the selected prop
        if(globalProp[i].select && posRightClick.state){
            if(posRightClick.x != null && posRightClick.y != null){

                globalProp[i].mouve(posRightClick.x, posRightClick.y)
                
            }
            
            
        }

    }

    if(posLeft.state){// selection function
        selection()
    }    
}

main()
