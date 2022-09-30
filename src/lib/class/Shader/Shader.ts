import { writable } from 'svelte/store'

class Shader{

    program: WebGLProgram

    vertexPositionAttribute: number
    vertexColorAttribute: number
    vertexNormalAttribute: number

    lightColor: WebGLUniformLocation[] = []
    lightPosition: WebGLUniformLocation[] = []

    Ka: WebGLUniformLocation
    Kd: WebGLUniformLocation
    Ks: WebGLUniformLocation
    Shininess: WebGLUniformLocation

    pMatrix: WebGLUniformLocation
    mvMatrix: WebGLUniformLocation

    constructor(gl:WebGLRenderingContext, program: WebGLProgram){

        this.program = program

        // Set up vertex attribute
        this.vertexPositionAttribute = gl.getAttribLocation(program, "aVertexPosition")
        gl.enableVertexAttribArray(this.vertexPositionAttribute)

        this.vertexColorAttribute = gl.getAttribLocation(program, "aVertexColor")
        gl.enableVertexAttribArray(this.vertexColorAttribute)

        this.vertexNormalAttribute = gl.getAttribLocation(program, "aVertexNormal")
        gl.enableVertexAttribArray(this.vertexNormalAttribute)

        // Set up light attribute
        for(let i=0; i<3; i++){
            this.lightColor[i] = gl.getUniformLocation(program, `lightColor${i+1}`)
            this.lightPosition[i] = gl.getUniformLocation(program, `lightPosition${i+1}`)
        }

        // Set up material attribute
        this.Ka = gl.getUniformLocation(program, "Ka")
        this.Kd = gl.getUniformLocation(program, "Kd")
        this.Ks = gl.getUniformLocation(program, "Ks")
        this.Shininess = gl.getUniformLocation(program, "Shininess")

        // Set up matrix
        this.pMatrix = gl.getUniformLocation(program, "pMatrix")
        this.mvMatrix = gl.getUniformLocation(program, "mvMatrix")

    }

    toStore(){
        return writable(this)
    }
}

export default Shader