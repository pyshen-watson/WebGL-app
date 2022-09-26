import type { Model, ModelStore, ItemStore } from '$utils/Type'
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

    function dataToBuffer(data:number[]): WebGLBuffer{
        let buffer:WebGLBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
        return buffer
    }

    for(let modelName of Object.keys(ModelStoreList)){

        let model:Model = await loadjson(`/src/asset/model/${modelName}.json`)

        model.vertexPositionsBuffer = dataToBuffer(model.vertexPositions)
        model.vertexNormalsBuffer = dataToBuffer(model.vertexNormals)
        model.vertexColorsBuffer = dataToBuffer(model.vertexColors)
        model.fragNumber = model.vertexPositions.length / 3

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
    itemStore.update(($store) => {
        $store.scaling_origin = deepcopy(model.scale)
        $store.rotation_direction = deepcopy(model.rotationDirection)
        $store.rotation_degree = deepcopy(model.rotationDegree)
        $store.rotation_auto = model.rotationAuto
        $store.location_shift = deepcopy(model.locationShift)
        return $store
    })
}