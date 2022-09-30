import { type Vec3, newVec3 } from '$utils/Math'
import LightEffect from './LightMotion'
import { writable } from 'svelte/store'

class Light{

    index: number
    color: Vec3
    location: Vec3
    effect = new LightEffect()

    constructor(index: number){
        this.index = index
        this.reset()
    }

    reset(){
        this.color = newVec3(1)
        this.location = [(this.index-1) * 100, 0, 0]
        this.effect.reset()
    }

    toStore(){
        return writable(this)
    }
}

export default Light