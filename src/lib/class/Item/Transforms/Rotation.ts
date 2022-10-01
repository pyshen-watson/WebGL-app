import { getNow } from '$utils/TimeTools'
import { newVec3 } from '$utils/Math'

class Rotation{

    degree_model = newVec3()
    degree_control = newVec3()

    auto: boolean = true
    speed: number = 30
    lastAngle: number = 0
    lastTime: number = getNow()

    tick(now:number, isCrazy:boolean){
        this.lastAngle += this.speed * ((now - this.lastTime) / 1000)
        if(!isCrazy)
            this.lastTime = now
    }

}

export default Rotation