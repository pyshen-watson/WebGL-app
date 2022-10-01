import { vec3 } from 'gl-matrix'

class Effect{

    on: boolean
    init: boolean
    temp: vec3

    constructor(){
        this.reset()
    }

    reset(){
        this.on = false
        this.init = false
        this.temp = vec3.fromValues(0,0,0)
    }
}

class LightEffect{

    flashing = new Effect()
    changing = new Effect()
    moving   = new Effect()
    dimming  = new Effect()

    reset(){
        this.flashing.reset()
        this.changing.reset()
        this.moving.reset()
        this.dimming.reset()
    }
}

export default LightEffect