import Store from "$class/Store"
import { GLStore } from "./GLStore"
import { flatVertex, flatFragment } from '$shader/Flat'
import { gouraudVertex, gouraudFragment } from '$shader/Gouraud'
import { phongVertex, phongFragment } from '$shader/Phong'
import { celVertex, celFragment } from '$shader/Cel'

export type Shader = {

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

export let ShaderStoreList = {
    'Flat':null,
    'Gouraud':null,
    'Phong':null,
    'Cel':null,
}

export function initShaderStoreList(){

    const gl:WebGLRenderingContext = GLStore.get('gl')

    let ShaderSourceList = {
        'Flat': [flatVertex, flatFragment],
        'Gouraud': [gouraudVertex, gouraudFragment],
        'Phong': [phongVertex, phongFragment],
        'Cel': [celVertex, celFragment]
    }

    function createShader(source:string, type:number):WebGLShader{
        let shader = gl.createShader(type)
        gl.shaderSource(shader, source)
        gl.compileShader(shader)
        return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null
    }

    for(let shaderName of Object.keys(ShaderStoreList)){

        // Set up program and shader
        let program = gl.createProgram()
        let vertexShader = createShader(ShaderSourceList[shaderName][0], gl.VERTEX_SHADER)
        let fragmentShader = createShader(ShaderSourceList[shaderName][1], gl.FRAGMENT_SHADER)
        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)
        gl.useProgram(program)

        // Set up vertex attribute
        let shader:Shader = { program }
        shader.vertexPositionAttribute = gl.getAttribLocation(program, "aVertexPosition")
        shader.vertexColorAttribute = gl.getAttribLocation(program, "aVertexColor")
        shader.vertexNormalAttribute = gl.getAttribLocation(program, "aVertexNormal")
        gl.enableVertexAttribArray(shader.vertexPositionAttribute)
        gl.enableVertexAttribArray(shader.vertexColorAttribute)
        gl.enableVertexAttribArray(shader.vertexNormalAttribute)

        // Set up light attribute
        shader.lightColor1 = gl.getUniformLocation(program, "lightColor1")
        shader.lightColor2 = gl.getUniformLocation(program, "lightColor2")
        shader.lightColor3 = gl.getUniformLocation(program, "lightColor3")
        shader.lightPosition1 = gl.getUniformLocation(program, "lightPosition1")
        shader.lightPosition2 = gl.getUniformLocation(program, "lightPosition2")
        shader.lightPosition3 = gl.getUniformLocation(program, "lightPosition3")

        // Set up material attribute
        shader.Ka = gl.getUniformLocation(program, "Ka")
        shader.Kd = gl.getUniformLocation(program, "Kd")
        shader.Ks = gl.getUniformLocation(program, "Ks")
        shader.Shininess = gl.getUniformLocation(program, "Shininess")

        // Set up matrix
        shader.pMatrix = gl.getUniformLocation(program, "pMatrix")
        shader.mvMatrix = gl.getUniformLocation(program, "mvMatrix")

        ShaderStoreList[shaderName] = new Store(shader)
    }
}
