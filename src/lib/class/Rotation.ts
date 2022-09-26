import type { Vec3 } from '$utils/Type'
import { degToRad } from '$utils/Math'
import deepcopy from '$utils/Deepcopy'
import { getNow } from '$utils/TimeTools'

class Rotation{

    degree: Vec3 = [0,0,0]
    direction: Vec3 = [0,1,0]
    auto: boolean = true
    speed: number = 30
    lastAngle: number = 0
    lastTime: number = getNow()

    tick(now:number, isCrazy:boolean){
        this.lastAngle += this.speed * ((now - this.lastTime) / 1000)
        if(!isCrazy)
            this.lastTime = now
    }

    get radian(): Vec3{
        let radian:Vec3 = deepcopy(this.degree)
        radian.forEach((value,i,arr) => {arr[i] = degToRad(value)})
        return radian
    }

}

export default Rotation