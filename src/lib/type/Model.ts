type Model = {

    scale: number[]
    rotationDirection: number[]
    rotationDegree: number
    rotationAuto: boolean
    height: number

    vertexPositions: number[]
    vertexNormals: number[]
    vertexColors: number[]

    vertexPositionsBuffer?: WebGLBuffer
    vertexNormalsBuffer?: WebGLBuffer
    vertexColorsBuffer?: WebGLBuffer
    vertexNumber?:number
}

export default Model