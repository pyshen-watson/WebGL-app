import { webglStore } from "./WebGLStore"
import Shader from "$class/Shader"
import type { ShaderStore } from "$utils/Type"
import { writable, get } from "svelte/store"

import { flatVertex, flatFragment } from '$shader/Flat'
import { gouraudVertex, gouraudFragment } from '$shader/Gouraud'
import { phongVertex, phongFragment } from '$shader/Phong'
import { celVertex, celFragment } from '$shader/Cel'

export let ShaderStoreList = {
    Flat: null,
    Gouraud: null,
    Phong: null,
    Cel: null
}

export function initShaderStoreList(){

    let webgl = get(webglStore)
    const gl:WebGLRenderingContext = webgl.gl

    let ShaderSourceList = {
        Flat: [flatVertex, flatFragment],
        Gouraud: [gouraudVertex, gouraudFragment],
        Phong: [phongVertex, phongFragment],
        Cel: [celVertex, celFragment]
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
        let shader = new Shader(program)

        // Set up vertex attribute
        shader.vertexPositionAttribute = gl.getAttribLocation(program, "aVertexPosition")
        gl.enableVertexAttribArray(shader.vertexPositionAttribute)
        shader.vertexColorAttribute = gl.getAttribLocation(program, "aVertexColor")
        gl.enableVertexAttribArray(shader.vertexColorAttribute)
        shader.vertexNormalAttribute = gl.getAttribLocation(program, "aVertexNormal")
        gl.enableVertexAttribArray(shader.vertexNormalAttribute)

        // Set up light attribute
        for(let i=0; i<3; i++){
            shader.lightColor[i] = gl.getUniformLocation(program, `lightColor${i+1}`)
            shader.lightPosition[i] = gl.getUniformLocation(program, `lightPosition${i+1}`)
        }

        // Set up material attribute
        shader.Ka = gl.getUniformLocation(program, "Ka")
        shader.Kd = gl.getUniformLocation(program, "Kd")
        shader.Ks = gl.getUniformLocation(program, "Ks")
        shader.Shininess = gl.getUniformLocation(program, "Shininess")

        // Set up matrix
        shader.pMatrix = gl.getUniformLocation(program, "pMatrix")
        shader.mvMatrix = gl.getUniformLocation(program, "mvMatrix")

        ShaderStoreList[shaderName] = writable(shader)
    }

}
