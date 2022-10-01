import LightColor from './LightColor'
import LightEffect from './LightMotion'
import LightLocation from './LightLocation'
import { writable } from 'svelte/store'

class Light{

    color: LightColor
    location: LightLocation
    effect: LightEffect

    constructor(index: number){
        this.color = new LightColor()
        this.location = new LightLocation(index)
        this.effect = new LightEffect()
    }

    reset(){
        this.color.reset()
        this.location.reset()
        this.effect.reset()
    }

    toStore(){
        return writable(this)
    }
}

export default Light