import { get } from 'svelte/store'
import Shader from './Shader'
import ShaderName from './ShaderName'
import ShaderSource from './ShaderSource'
import type { ShaderStore } from '$utils/Type'

interface ShaderStoreList{
    [name:string]: ShaderStore
}

class ShaderDB{

    static db: ShaderStoreList = {}

    static init(gl: WebGLRenderingContext){

        for (let name of Object.values(ShaderName)){

            let src = new ShaderSource(name)
            let shader = new Shader(gl, src)
            this.db[name] = shader.toStore()
        }
    }

    static getStore(name: ShaderName){
        return this.db[name]
    }

    static getInstance(name: ShaderName){
        return get(this.db[name])
    }
}

export default ShaderDB





