import Model from './Model'
import { get } from 'svelte/store'
import ModelName from './ModelName'
import ModelList from '$model/ModelImport'
import type { GL, ModelStore } from '$utils/Type'

interface ModelStoreList {
    [name:string]: ModelStore
}

class ModelDB {

    static db: ModelStoreList = {}

    static async init(gl: GL){

        for (let modelName of Object.values(ModelName) ){

            let src = ModelList[modelName]
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
