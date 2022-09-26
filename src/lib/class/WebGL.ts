class WebGL{

    canvas:HTMLCanvasElement
    width:number
    height:number
    gl?: WebGLRenderingContext

    constructor(canvas:HTMLCanvasElement){
        this.canvas = canvas
        this.width = canvas.width
        this.height = canvas.height
    }

    setColor(red:number, green:number, blue:number, alpha:number){
        this.gl.clearColor(red, green, blue, alpha)
    }

}

export default WebGL