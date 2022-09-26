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

}

export default WebGL