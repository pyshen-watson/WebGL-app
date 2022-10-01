import Model from './Model'
import { get } from 'svelte/store'
import ModelName from './ModelName'
import type ModelSource from './ModelSource'
import type { GL, ModelStore } from '$utils/Type'

interface ModelStoreList {
    [name:string]: ModelStore
}

async function loadjson(modelName: string) {
    let path:string = `/src/asset/model/${modelName}.json`
    const res = await fetch(path)
    return await res.json()
}

class ModelDB {

    static db: ModelStoreList = {}

    static async init(gl: GL){

        for (let modelName of Object.values(ModelName) ){

            let src: ModelSource = await loadjson(modelName)
            let model = new Model(gl, src)
            let store = model.toStore()
            this.db[modelName] = store
        }

    }

    static getStore(name: ModelName){
        return this.db[name]
    }

    static getInstance(name: ModelName){
        return get(this.db[name])
    }

}

export default ModelDB
