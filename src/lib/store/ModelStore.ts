import Store from "$class/Store"
import type { Vec3 } from '$class/Type'
import { GLStore } from "./GLStore"

export type Model = {

    scale: Vec3
    rotationDirection: Vec3
    rotationDegree: Vec3
    rotationAuto: boolean
    height: number

    vertexPositions: number[]
    vertexNormals: number[]
    vertexColors: number[]

    vertexPositionsBuffer?: WebGLBuffer
    vertexNormalsBuffer?: WebGLBuffer
    vertexColorsBuffer?: WebGLBuffer
    fragNumber?:number
}

export let ModelStoreList = {
    'Teapot':null,
    'Kangaroo':null,
    'Moai':null,
    'Plant':null,
    'Church':null,
    'Car':null
}


export async function initModelStoreList(){

    const gl:WebGLRenderingContext = GLStore.get('gl')

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

        let store = new Store(model)
        ModelStoreList[modelName] =  store
    }
}


import type { Item } from "./ItemStore"
export function changeModel(store:Store<Item>, modelName:string){

    store.set('modelName', modelName)
    
    let modelStore:Store<Model> = ModelStoreList[modelName]
    if(!modelStore)
        return

    let data = modelStore.getInstance()
    store.set('scaling_origin', data.scale)
    store.set('rotation_direction', data.rotationDirection)
    store.set('rotation_degree', data.rotationDegree)
    store.set('rotation_auto', data.rotationAuto)

    let location:Vec3 = store.get('location')
    location[1] = data.height
    store.set('location', location)
}