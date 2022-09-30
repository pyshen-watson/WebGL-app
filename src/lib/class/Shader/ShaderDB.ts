import Shader from './Shader'
import ShaderName from './ShaderName'
import ShaderSource from './ShaderSource'
import { get, type Writable } from 'svelte/store'

interface ShaderStoreList{
    [name:string]: Writable<Shader>
}

function createShader(gl:WebGLRenderingContext, source:string, type:number): WebGLShader{
    let shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null
}

class ShaderDB{

    private static db: ShaderStoreList = {}

    public static init(gl: WebGLRenderingContext){

        for (let name of Object.values(ShaderName)){

            let src = new ShaderSource(name)
            let vertexShader = createShader(gl, src.vertexSource, gl.VERTEX_SHADER)
            let fragmentShader = createShader(gl, src.fragmentSource, gl.FRAGMENT_SHADER)

            let program = gl.createProgram()
            gl.attachShader(program, vertexShader)
            gl.attachShader(program, fragmentShader)
            gl.linkProgram(program)
            gl.useProgram(program)

            let shader = new Shader(gl, program)
            this.db[name] = shader.toStore()
        }
    }

    public static getStore(name: ShaderName){
        return this.db[name]
    }

    public static getInstance(name: ShaderName){
        return get(this.db[name])
    }
}

export default ShaderDB





