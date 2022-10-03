import { vec3 } from "gl-matrix"
import Effect from "./Effect"
import type Light from "$light/Light"

class EffectFlashing extends Effect{

    counter: number
    period: number

    constructor(light: Light){
        super(light)
        this.counter = 0
        this.period = 16
    }

    turnOn(){
        super.turnOn()
        if(!this.init){
            this.counter = 0
        }
    }

    update(){
        this.counter += 1
        this.counter %= this.period
    }

    use(input: vec3){

        let flash = vec3.clone(input)

        if(this.counter === this.period/2){

            vec3.scale(flash, flash, 2)
            vec3.round(flash, flash)
            vec3.min(flash, flash, [15,15,15])
            vec3.max(flash, flash, [1, 1, 1])
        }
        else if (this.counter === 0){

            vec3.scale(flash, flash, 0.5)
            vec3.round(flash, flash)
            vec3.min(flash, flash, [15,15,15])
            vec3.max(flash, flash, [1, 1, 1])
        }

        return flash
    }

}

export default EffectFlashing
