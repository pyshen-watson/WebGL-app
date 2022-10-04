import { writable } from "svelte/store"
import type { GL } from '$utils/Type'
import ModelSource from "./ModelSource"

class Model extends ModelSource{

    gl: GL
    vertexPositionsBuffer?: WebGLBuffer
    vertexNormalsBuffer?: WebGLBuffer
    vertexColorsBuffer?: WebGLBuffer
    vertexNumber?:number

    constructor(gl: GL, src: Partial<Model>){

        super()

        Object.assign(this, src)

        this.gl = gl
        this.vertexPositionsBuffer = this.dataToBuffer(this.vertexPositions)
        this.vertexNormalsBuffer = this.dataToBuffer(this.vertexNormals)
        this.vertexColorsBuffer = this.dataToBuffer(this.vertexColors)
        this.vertexNumber = this.vertexPositions.length / 3

    }

    dataToBuffer(data:number[]): WebGLBuffer{

        let gl = this.gl
        let buffer:WebGLBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
        return buffer
    }

    toStore() {
        return writable(this)
    }

}

export default Model