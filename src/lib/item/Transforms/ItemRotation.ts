import { mat4, vec3, glMatrix } from 'gl-matrix'
import Time from '$utils/Time'
import type Item from '$item/Item'

const toRadian = glMatrix.toRadian

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

    get degree(){
        let sum = vec3.create()
        return vec3.add(sum, this.degree_control, this.degree_model)
    }

    tick(isCrazy:boolean){

        let now = Time.getNow()
        this.lastAngle += this.speed * ((now - this.lastTime) / 1000)

        if(!isCrazy)
            this.lastTime = now
    }

    apply(mvMatrix: mat4, item: Item){

        for(let i=0; i<3; i++){
            let radian = toRadian(this.degree[i])
            let axis = item.getAxis(i)
            mat4.rotate(mvMatrix, mvMatrix, radian, axis)
        }

        if(this.auto || item.motion.crazy.on){
            this.tick(item.motion.crazy.on)
            let radian = toRadian(this.lastAngle)
            let axis = item.getAxis(1)
            mat4.rotate(mvMatrix, mvMatrix, radian, axis)
        }

    }

}

export default Rotation