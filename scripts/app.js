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


//main function 

const main = ()=>{
    window.requestAnimationFrame(main)

}

main()


const map = new Mapping(ctx)

map.tree
