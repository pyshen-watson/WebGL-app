import { vec3 } from 'gl-matrix'
import type Light from './Light'
import EffectChanging from './LightEffects/EffectChanging'
import EffectDimming from './LightEffects/EffectDimming'
import EffectFlashing from './LightEffects/EffectFlashing'
import EffectMoving from './LightEffects/EffectMoving'

class LightEffect{

    light: Light
    flashing: EffectFlashing
    changing: EffectChanging
    moving: EffectMoving
    dimming: EffectDimming

    constructor(light: Light){
        this.light = light
        this.flashing = new EffectFlashing(light)
        this.changing = new EffectChanging(light)
        this.moving = new EffectMoving(light)
        this.dimming = new EffectDimming(light)
    }

    apply(){

        let color = vec3.clone(this.light.color.level)
        let shift = vec3.clone(this.light.location.shift)

        color = this.light.effect.changing.apply(color)
        color = this.light.effect.flashing.apply(color)
        color = this.light.effect.dimming.apply(color)
        shift = this.light.effect.moving.apply(shift)

        return {color, shift}
    }

    reset(){
        this.flashing.turnOff()
        this.changing.turnOff()
        this.moving.turnOff()
        this.dimming.turnOff()
    }
}

export default LightEffect