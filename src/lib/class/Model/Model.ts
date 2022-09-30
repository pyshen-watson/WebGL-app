import ModelSource from "./ModelSource"
import { writable } from "svelte/store"

class Model extends ModelSource {

    gl: WebGLRenderingContext
    vertexPositionsBuffer?: WebGLBuffer
    vertexNormalsBuffer?: WebGLBuffer
    vertexColorsBuffer?: WebGLBuffer
    fragNumber?:number

    constructor(gl:WebGLRenderingContext, src:ModelSource){

        super()

        this.ratio = src.ratio
        this.degree = src.degree
        this.autoRotate = src.autoRotate

        this.vertexPositions = src.vertexPositions
        this.vertexNormals = src.vertexNormals
        this.vertexColors = src.vertexColors

        this.gl = gl
        this.vertexPositionsBuffer = this.dataToBuffer(this.vertexPositions)
        this.vertexNormalsBuffer = this.dataToBuffer(this.vertexNormals)
        this.vertexColorsBuffer = this.dataToBuffer(this.vertexColors)
        this.fragNumber = this.vertexPositions.length / 3

    }

    dataToBuffer(data:number[]): WebGLBuffer{

        let buffer:WebGLBuffer = this.gl.createBuffer()
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer)
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), this.gl.STATIC_DRAW)
        return buffer
    }

    toStore() {
        return writable(this)
    }

}

export default Model