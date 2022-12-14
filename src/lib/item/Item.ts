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
import { mat4, vec3 } from "gl-matrix"
import Tool from "$utils/Tool"

class Item{

    index: number
    axisOrder: vec3
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
        this.axisOrder = vec3.fromValues(0,1,2)
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

    apply(mvMatrix: mat4){
        this.location.apply(mvMatrix)
        this.rotation.apply(mvMatrix, this)
        this.scaling.apply(mvMatrix, this)
        this.shearing.apply(mvMatrix)
        this.motion.apply(mvMatrix)
    }

    changeModel(modelName?:ModelName){

        if(!modelName) {
            this.modelName = null
            return
        }

        this.modelName = modelName
        let model = ModelDB.getInstance(modelName)

        this.rotation.auto = false
        this.axisOrder = Tool.deepcopy(model.axis)
        this.scaling.ratio_model = Tool.deepcopy(model.ratio)
        vec3.scaleAndAdd(this.location.shift_model, model.shift_base, model.shift_grow, this.index)
        vec3.scaleAndAdd(this.rotation.degree_model, model.degree_base, model.degree_grow, this.index)

    }

    getAxis(index: number){
        let axis = vec3.fromValues(0,0,0)
        axis[this.axisOrder[index]] = 1
        return axis
    }

    reset(){
        this.material.reset()
        this.motion.reset()
        this.rotation.auto = false
        this.location.shift_control = [0,0,0]
        this.rotation.degree_control = [0,0,0]
        this.scaling.ratio_control = [1,1,1]
        this.shearing.degree = [0,0,0]
    }
}

export default Item