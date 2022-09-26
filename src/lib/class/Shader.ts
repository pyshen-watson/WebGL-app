class Shader{

    program: WebGLProgram

    vertexPositionAttribute?: number
    vertexColorAttribute?: number
    vertexNormalAttribute?: number

    lightColor?: WebGLUniformLocation[] = []
    lightPosition?: WebGLUniformLocation[] = []

    Ka?: WebGLUniformLocation
    Kd?: WebGLUniformLocation
    Ks?: WebGLUniformLocation
    Shininess?: WebGLUniformLocation

    pMatrix?: WebGLUniformLocation
    mvMatrix?: WebGLUniformLocation

    constructor(program: WebGLProgram){
        this.program = program
    }
}

export default Shader