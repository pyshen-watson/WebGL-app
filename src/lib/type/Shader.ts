type Shader = {

    program: WebGLProgram

    vertexPositionAttribute?: number
    vertexColorAttribute?: number
    vertexNormalAttribute?: number

    lightColor1?: WebGLUniformLocation
    lightColor2?: WebGLUniformLocation
    lightColor3?: WebGLUniformLocation

    lightPosition1?: WebGLUniformLocation
    lightPosition2?: WebGLUniformLocation
    lightPosition3?: WebGLUniformLocation

    Ka?: WebGLUniformLocation
    Kd?: WebGLUniformLocation
    Ks?: WebGLUniformLocation
    Shininess?: WebGLUniformLocation

    pMatrix?: WebGLUniformLocation
    mvMatrix?: WebGLUniformLocation
}

export default Shader