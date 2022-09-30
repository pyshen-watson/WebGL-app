import { writable } from "svelte/store"

class Canvas{

    width: number
    height: number
    gl: WebGLRenderingContext

    constructor(canvas:HTMLCanvasElement){

        this.width = canvas.width
        this.height = canvas.height
        this.gl = canvas.getContext("webgl")

        if (this.gl === null){
            alert("Your browser doesn't support WebGL.")
            return
        }

        this.gl.enable(this.gl.DEPTH_TEST)
        this.gl.clear(this.gl.COLOR_BUFFER_BIT)
        this.gl.getExtension('OES_standard_derivatives')
    }

    toStore(){
        return writable(this)
    }

}


export default Canvas