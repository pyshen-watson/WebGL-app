import Time from '$utils/Time'
import { mat4 } from "gl-matrix"

export class Motion{

    on: boolean
    index: number
    func: Function

    constructor(index:number, func: Function){

        this.on = false
        this.index = index
        this.func = func
    }

    turnOn(){
        this.on = true
    }
}

class ItemMotion{

    crazy = new Motion(0, (x:number) => 1)
    vibing = new Motion(12, (x:number) => Math.cos(x))
    shaking = new Motion(4, (x:number) => 0.1 * Math.cos(x))
    dancing = new Motion(6, (x:number) => 0.5 * Math.sin(x))
    jumping = new Motion(13, (x:number) => 3 * Math.sin(x))
    running = new Motion(8, (x:number) => -Math.tan(x/10))
    backing = new Motion(8, (x:number) => Math.tan(x/10))
    swinging = new Motion(8, (x:number) => -Math.sin(x/6))

    reset(){
        this.crazy.on = false
        this.vibing.on = false
        this.shaking.on = false
        this.dancing.on = false
        this.jumping.on = false
        this.running.on = false
        this.backing.on = false
        this.swinging.on = false
    }

    apply(mvMatrix: mat4){

        for(let attr in this){

            let motion:Motion = this[attr]
            if(!motion.on)
                continue

            let motionMatrix = mat4.create()
            mat4.identity(motionMatrix)
            let index:number = motion.index
            let func:Function = motion.func
            motionMatrix[index] = func(Time.getRadNow())
            mat4.multiply(mvMatrix, motionMatrix, mvMatrix)
        }
    }
}

export default ItemMotion