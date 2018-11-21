const canva = document.querySelector('.frame')
const ctx = canva.getContext('2d')

const canvaDimension = {
    width: canva.width,
    height: canva.height
}

//Global variable for this file 

const posMouse = {
    x : null,
    y : null
}
const posClick = {
    x : null,
    y : null
}

//####EVENT ON CANVAS#####
// mouse move
canva.addEventListener('mousemove', (event)=>{
    posMouse.x = event.clientX
    posMouse.y = event.clientY

})

//mouse click

canva.addEventListener('click', (event)=>{
    posClick.x = event.clientX
    posClick.y = event.clientY

})

const clear =()=>
{
    ctx.beginPath()
    ctx.fillStyle ="white"
    ctx.rect(0,0,canvaDimension.width, canvaDimension.height)
    ctx.fill()


}
//main function 

const map = new Mapping(ctx,canvaDimension.width, canvaDimension.height,1)
const villa = new People(ctx, 300,300,1,"Wagon")
villa.create()

map.tree(200,200,20)




const main = ()=>{
    window.requestAnimationFrame(main)
    
}

main()

