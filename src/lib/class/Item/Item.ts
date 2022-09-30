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

const defaultShaderName = [ ShaderName.Flat, ShaderName.Gouraud, ShaderName.Phong]

class Item{

    modelName: ModelName
    shaderName: ShaderName
    material: Material

    location: Location
    rotation: Rotation
    scaling:  Scaling
    shearing: Shearing
    motion: ItemMotion


    constructor(index: number){

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
        this.scaling.ratio_model = deepcopy(model.ratio)
        this.rotation.degree_model = deepcopy(model.degree)
        this.rotation.auto = model.autoRotate
    }
}

export default Item