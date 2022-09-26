import type { Vec3 } from '$utils/Type'

export type ModelOption = {

    scale: Vec3
    rotationDirection: Vec3
    rotationDegree: Vec3
    rotationAuto: boolean
    locationShift: Vec3

    vertexPositions: number[]
    vertexNormals: number[]
    vertexColors: number[]
}

function dataToBuffer(gl:WebGLRenderingContext, data:number[]): WebGLBuffer{
    let buffer:WebGLBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
    return buffer
}

class Model{

    scale: Vec3
    rotationDirection: Vec3
    rotationDegree: Vec3
    rotationAuto: boolean
    locationShift: Vec3

    vertexPositions: number[]
    vertexNormals: number[]
    vertexColors: number[]

    vertexPositionsBuffer?: WebGLBuffer
    vertexNormalsBuffer?: WebGLBuffer
    vertexColorsBuffer?: WebGLBuffer
    fragNumber?:number

    constructor(gl:WebGLRenderingContext, option:ModelOption){

        this.scale = option.scale
        this.rotationDirection = option.rotationDirection
        this.rotationDegree = option.rotationDegree
        this.rotationAuto = option.rotationAuto
        this.locationShift = option.locationShift

        this.vertexPositions = option.vertexPositions
        this.vertexNormals = option.vertexNormals
        this.vertexColors = option.vertexColors

        this.vertexPositionsBuffer = dataToBuffer(gl, this.vertexPositions)
        this.vertexNormalsBuffer = dataToBuffer(gl, this.vertexNormals)
        this.vertexColorsBuffer = dataToBuffer(gl, this.vertexColors)
        this.fragNumber = this.vertexPositions.length / 3


    }
}

export default Model