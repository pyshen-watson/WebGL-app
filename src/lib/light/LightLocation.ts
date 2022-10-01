import { vec3, vec4 } from "gl-matrix"

class LightLocation{

    anchor: vec3
    shift: vec3

    constructor(index: number){
        this.anchor = vec3.fromValues((index-1) * 100, 0, 0)
        this.shift = vec3.fromValues(0,0,0)
    }

    reset(){
        vec3.zero(this.shift)
    }

    get translate(){
        let sum = vec3.create()
        vec3.add(sum, this.anchor, this.shift)
        let sum4 = vec4.fromValues(sum[0], sum[1], sum[2], 1)
        return sum4
    }
}

export default LightLocation