import { writable } from 'svelte/store'
import type { GL } from '$utils/Type'
import type ShaderSource from './ShaderSource'

class Shader{

    gl: GL
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

    constructor(gl:GL, src:ShaderSource){

        this.gl = gl

        let vertexShader = this.createShader(src.vertexSource, gl.VERTEX_SHADER)
        let fragmentShader = this.createShader(src.fragmentSource, gl.FRAGMENT_SHADER)

        this.program = gl.createProgram()
        gl.attachShader(this.program, vertexShader)
        gl.attachShader(this.program, fragmentShader)
        gl.linkProgram(this.program)
        gl.useProgram(this.program)


        // Set up vertex attribute
        this.vertexPositionAttribute = gl.getAttribLocation(this.program, "aVertexPosition")
        gl.enableVertexAttribArray(this.vertexPositionAttribute)

        this.vertexColorAttribute = gl.getAttribLocation(this.program, "aVertexColor")
        gl.enableVertexAttribArray(this.vertexColorAttribute)

        this.vertexNormalAttribute = gl.getAttribLocation(this.program, "aVertexNormal")
        gl.enableVertexAttribArray(this.vertexNormalAttribute)

        // Set up light attribute
        for(let i=0; i<3; i++){
            this.lightColor[i] = gl.getUniformLocation(this.program, `lightColor${i+1}`)
            this.lightPosition[i] = gl.getUniformLocation(this.program, `lightPosition${i+1}`)
        }

        // Set up material attribute
        this.Ka = gl.getUniformLocation(this.program, "Ka")
        this.Kd = gl.getUniformLocation(this.program, "Kd")
        this.Ks = gl.getUniformLocation(this.program, "Ks")
        this.Shininess = gl.getUniformLocation(this.program, "Shininess")

        // Set up matrix
        this.pMatrix = gl.getUniformLocation(this.program, "pMatrix")
        this.mvMatrix = gl.getUniformLocation(this.program, "mvMatrix")

    }

    createShader(source:string, type:number): WebGLShader{

        let gl = this.gl
        let shader = gl.createShader(type)
        gl.shaderSource(shader, source)
        gl.compileShader(shader)
        return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null
    }

    toStore(){
        return writable(this)
    }
}

export default Shader