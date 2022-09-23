import Repo from '$class/Repository'
import type { Model } from '$utils/Type'
import { glRepo } from "./GLRepo"

export let ModelRepoList = {
    'Teapot':null,
    'Kangaroo':null,
    'Moai':null,
    'Plant':null,
    'Church':null,
    'Car':null
}

export async function initModelRepoList(){

    const gl:WebGLRenderingContext = glRepo.get('gl')

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

    for(let modelName of Object.keys(ModelRepoList)){

        let model:Model = await loadjson(`/src/asset/model/${modelName}.json`)

        model.vertexPositionsBuffer = dataToBuffer(model.vertexPositions)
        model.vertexNormalsBuffer = dataToBuffer(model.vertexNormals)
        model.vertexColorsBuffer = dataToBuffer(model.vertexColors)
        model.fragNumber = model.vertexPositions.length / 3

        let repo = new Repo(model)
        ModelRepoList[modelName] =  repo
    }
}

import type { ItemRepo, ModelRepo } from '$utils/Type'
import deepcopy from '$utils/Deepcopy'

export function changeModel(itemRepo:ItemRepo, modelName:string){

    itemRepo.set('modelName', modelName)

    let modelRepo:ModelRepo = ModelRepoList[modelName]
    if (!modelRepo) { return } // Invalid modelName such as 'Hide'

    let model:Model = modelRepo.getInstance()
    itemRepo.set('scaling_origin', deepcopy(model.scale))
    itemRepo.set('rotation_direction', deepcopy(model.rotationDirection))
    itemRepo.set('rotation_degree', deepcopy(model.rotationDegree))
    itemRepo.set('rotation_auto', deepcopy(model.rotationAuto))
    itemRepo.set('location_shift', deepcopy(model.locationShift))
}