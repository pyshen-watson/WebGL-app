import { vec3, mat4 } from 'gl-matrix'

class ItemLocation{

    anchor: vec3 // Share by the same id, ex. all item[1] have the same anchor
    shift_model: vec3 // Share by the same model, ex. all Teapots have the same shift
    shift_control: vec3 // This shift can be modified by controller

    constructor(index: number){
        this.anchor = vec3.fromValues((index-1)*55, 0, -100)
        this.shift_model = vec3.fromValues(0,0,0)
        this.shift_control = vec3.fromValues(0,0,0)
    }

    get translate(){
        let out = vec3.create()
        vec3.add(out, this.shift_model, this.shift_control)
        vec3.add(out, this.anchor, out)
        return out
    }

    apply(mvMatrix: mat4){
        mat4.translate(mvMatrix, mvMatrix, this.translate)
    }

}

export default ItemLocation