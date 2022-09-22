import drawScene from "./drawScene"

function nextFrame(){
    requestAnimationFrame(nextFrame)
    drawScene()
}

export default nextFrame