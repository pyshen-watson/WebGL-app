import { vec3 } from "gl-matrix"
import Effect from "./Effect"
import type Light from "$light/Light"

class EffectMoving extends Effect{

    theta: number
    ratio: number

    constructor(light: Light){
        super(light)
        this.theta = 0
        this.ratio = 150
    }

    get sin(){
        return Math.sin(this.theta)
    }

    get cos(){
        return Math.cos(this.theta)
    }

    update(){
        this.theta += 0.2
        this.theta %= (2*Math.PI)
    }

    use(input: vec3){
        let shift = vec3.create()
        shift = vec3.fromValues(this.cos, this.sin, this.sin)
        vec3.scale(shift, shift, this.ratio)
        return shift
    }
}

export default EffectMoving