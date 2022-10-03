import Color from "$utils/Color"
import Effect from "./Effect"
import type Light from "$light/Light"
import type { vec3 } from "gl-matrix"

class EffectChanging extends Effect{

    counter: number

    constructor(light: Light){
        super(light)
        this.counter = 0
    }

    get degree(){
        return this.counter / 360
    }

    update(){
        this.counter += 10
        this.counter %= 360
    }

    use(input: vec3){
        return Color.HSL2RGB(this.degree, 1, 0.2)
    }
}

export default EffectChanging