import type Model from "$type/Model"
import Store from "$class/Store"
import GLStore from "./GLStore"

let ModelStoreList = {
    'Teapot':null,
    'Kangaroo':null,
    'Moai':null,
    'Plant':null,
    'Church':null,
    'Car':null
}
export { ModelStoreList as default}


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
        model.vertexNumber = model.vertexPositions.length / 3

        let store = new Store(model)
        ModelStoreList[modelName] =  store
    }
}
