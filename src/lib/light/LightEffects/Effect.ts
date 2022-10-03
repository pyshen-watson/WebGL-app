import type Light from "$light/Light"
import { vec3 } from "gl-matrix"

abstract class Effect{

    on: boolean
    init: boolean
    light: Light
    backup_color: vec3
    backup_shift: vec3

    constructor(light: Light){
        this.on = false
        this.init = false
        this.light = light
        this.backup_color = vec3.clone(this.light.color.level)
        this.backup_shift = vec3.clone(this.light.location.shift)
    }

    get off(){
        return !this.on
    }

    turnOn(){
        
        this.on = true

        if(!this.init){
            this.backup_color = vec3.clone(this.light.color.level)
            this.backup_shift = vec3.clone(this.light.location.shift)
            this.init = true
        }
    }

    turnOff(){

        this.on = false

        if(this.init){
            this.light.color.level = vec3.clone(this.backup_color)
            this.light.location.shift = vec3.clone(this.backup_shift)
            this.init = false
        }
    }

    abstract update(): void
    abstract use(input: vec3): vec3

    apply(input: vec3){

        if(this.off)
            return input

        this.update()
        return this.use(input)
    }
}

export default Effect