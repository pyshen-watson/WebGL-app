import { vec3 } from 'gl-matrix'
import Time from '$utils/Time'

class Rotation{

    degree_model: vec3
    degree_control: vec3
    auto: boolean
    speed: number
    lastAngle: number
    lastTime: number

    constructor(){

        this.degree_model = vec3.fromValues(0,0,0)
        this.degree_control = vec3.fromValues(0,0,0)
        this.auto = true
        this.speed = 30
        this.lastAngle = 0
        this.lastTime = Time.getNow()
    }

    tick(isCrazy:boolean){

        let now = Time.getNow()
        this.lastAngle += this.speed * ((now - this.lastTime) / 1000)
        
        if(!isCrazy)
            this.lastTime = now
    }

}

export default Rotation