import Model from './Model'
import ModelName from './ModelName'
import type ModelSource from './ModelSource'
import { get, type Writable } from 'svelte/store'

interface ModelStoreList {
    [name:string]: Writable<Model>
}

async function loadjson(modelName: ModelName) {
    let path:string = `/src/asset/model/${modelName}.json`
    const res = await fetch(path)
    return await res.json()
}

class ModelDB {

    private static db: ModelStoreList = {}

    public static async init(gl:WebGLRenderingContext){

        for (let modelName of Object.values(ModelName) ){

            let src:ModelSource = await loadjson(modelName)
            let model = new Model(gl, src)
            let store = model.toStore()
            this.db[modelName] = store
        }

    }

    public static getStore(name:ModelName){
        return this.db[name]
    }

    public static getInstance(name:ModelName){
        return get(this.db[name])
    }

}

export default ModelDB
