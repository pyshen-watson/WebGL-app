import type { Vec3 } from '$utils/Math'

class Effect{
    on: boolean = false
    init: boolean = false
    origin: Vec3 = [0,0,0]

    reset(){
        this.on = false
        this.init = false
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