import ItemLocation from "./Transforms/ItemLocation"
import ItemRotation from "./Transforms/ItemRotation"
import ItemScaling from "./Transforms/ItemScaling"
import ItemShearing from "./Transforms/ItemShearing"
import ItemMotion from "./Transforms/ItemMotion"
import ItemMaterial from "./ItemMaterial"

import ModelName from "$model/ModelName"
import ShaderName from "$shader/ShaderName"
import ModelDB from "$model/ModelDB"
import { writable } from "svelte/store"
import { vec3 } from "gl-matrix"
import Tool from "$utils/Tool"

class Item{

    index: number
    modelName: ModelName
    shaderName: ShaderName
    material: ItemMaterial

    location: ItemLocation
    rotation: ItemRotation
    scaling:  ItemScaling
    shearing: ItemShearing
    motion: ItemMotion

    constructor(index: number){

        this.index = index
        this.modelName = ModelName.Teapot
        this.shaderName = ShaderName.Flat
        this.material = new ItemMaterial()

        this.location = new ItemLocation(index)
        this.rotation = new ItemRotation()
        this.scaling = new ItemScaling()
        this.shearing = new ItemShearing()
        this.motion = new ItemMotion()

    }

    toStore(){
        return writable(this)
    }

    changeModel(modelName:ModelName){

        this.modelName = modelName

        let modelStore = ModelDB.getStore(modelName)
        if (!modelStore) { return } // Invalid modelName such as 'Hide'

        let model = ModelDB.getInstance(modelName)

        this.rotation.auto = false
        this.scaling.ratio_model = Tool.deepcopy(model.ratio)
        vec3.scaleAndAdd(this.location.shift_model, model.shift_base, model.shift_grow, this.index)
        vec3.scaleAndAdd(this.rotation.degree_model, model.degree_base, model.degree_grow, this.index)
    }
}

export default Item