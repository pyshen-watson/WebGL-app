import Location from "./Transforms/Location"
import Rotation from "./Transforms/Rotation"
import Scaling from "./Transforms/Scaling"
import Shearing from "./Transforms/Shearing"
import ItemMotion from "./Transforms/Motion"
import Material from "./Material"

import ModelName from "$class/Model/ModelName"
import ShaderName from "$class/Shader/ShaderName"
import ModelDB from "$class/Model/ModelDB"
import { get, writable } from "svelte/store"
import deepcopy from "$utils/Deepcopy"
import { linear } from "$utils/Math"

const defaultShaderName = [ ShaderName.Flat, ShaderName.Gouraud, ShaderName.Phong]

class Item{

    index: number
    modelName: ModelName
    shaderName: ShaderName
    material: Material

    location: Location
    rotation: Rotation
    scaling:  Scaling
    shearing: Shearing
    motion: ItemMotion


    constructor(index: number){

        this.index = index
        this.modelName = ModelName.Teapot
        this.shaderName = defaultShaderName[index]
        this.material = new Material()

        this.location = new Location(index)
        this.rotation = new Rotation()
        this.scaling = new Scaling()
        this.shearing = new Shearing()
        this.motion = new ItemMotion()

    }

    toStore(){
        return writable(this)
    }

    changeModel(modelName:ModelName){

        this.modelName = modelName

        let modelStore = ModelDB.getStore(modelName)
        if (!modelStore) { return } // Invalid modelName such as 'Hide'

        let model = get(modelStore)
        this.rotation.auto = false

        this.location.shift_model = linear(model.shift_base, model.shift_grow, this.index)
        this.rotation.degree_model = linear(model.degree_base, model.degree_grow, this.index)
        this.scaling.ratio_model = deepcopy(model.ratio)

    }
}

export default Item