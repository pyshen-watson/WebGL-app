import Effect from "./Effect"
import { vec3 } from "gl-matrix"
import type Light from "$light/Light"

class EffectDimming extends Effect{

    constructor(light: Light){
        super(light)
    }

    update(){}

    use(input: vec3){
        let dim = vec3.clone(input)
        vec3.sub(dim, dim, [0.1, 0.1, 0.1])
        vec3.max(dim, dim, [0.0, 0.0, 0.0])
        return dim
    }

}

export default EffectDimming