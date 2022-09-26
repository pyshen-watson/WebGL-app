import Model from '$class/Model'
import type { ModelOption } from '$class/Model'
import type { ModelStore, ItemStore } from '$utils/Type'
import { webglStore } from "./WebGLStore"
import { writable, get } from 'svelte/store'

export let ModelStoreList = {
    Teapot: null,
    Kangaroo: null,
    Moai: null,
    Plant: null,
    Church: null,
    Car: null
}

export async function initModelStoreList(){

    let webgl = get(webglStore)
    const gl:WebGLRenderingContext = webgl.gl

    async function loadjson(url:string) {
        const res = await fetch(url)
        return await res.json()
    }

    for(let modelName of Object.keys(ModelStoreList)){

        let option:ModelOption = await loadjson(`/src/asset/model/${modelName}.json`)
        let model = new Model(gl, option)
        let store = writable(model)
        ModelStoreList[modelName] =  store
    }
}

import deepcopy from '$utils/Deepcopy'

export function changeModel(itemStore:ItemStore, modelName:string){

    itemStore.update(($store) => {
        $store.modelName = modelName
        return $store
    })

    let modelStore:ModelStore = ModelStoreList[modelName]
    if (!modelStore) { return } // Invalid modelName such as 'Hide'

    let model:Model = get(modelStore)
    console.log(model);

    itemStore.update(($store) => {
        $store.scaling.origin = deepcopy(model.scale)
        $store.rotation.direction = deepcopy(model.rotationDirection)
        $store.rotation.degree = deepcopy(model.rotationDegree)
        $store.rotation.auto = model.rotationAuto
        $store.location.shift = deepcopy(model.locationShift)
        return $store
    })
}