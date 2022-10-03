import LightColor from './LightColor'
import LightEffect from './LightEffect'
import LightLocation from './LightLocation'
import { writable } from 'svelte/store'

class Light{

    color: LightColor
    location: LightLocation
    effect: LightEffect

    constructor(index: number){
        this.color = new LightColor()
        this.location = new LightLocation(index)
        this.effect = new LightEffect(this)
    }

    applyEffect(){
        return this.effect.apply()
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