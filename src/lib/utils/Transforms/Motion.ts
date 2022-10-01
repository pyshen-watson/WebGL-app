import { mat4 } from 'gl-matrix'
import Time from '$utils/Time'
import type Item from 'src/lib/item/Item'
import type { Motion } from '$item/Transforms/ItemMotion'

const createIdentityMatrix = () => {
    let matrix = mat4.create()
    return mat4.identity(matrix)
}

function motion(mvMatrix:mat4, item:Item){

    for(let attr in item.motion){

        let motion:Motion = item.motion[attr]
        if(!motion.on)
            continue

        let motionMatrix = createIdentityMatrix()
        let index:number = motion.index
        let func:Function = motion.func
        motionMatrix[index] = func(Time.getRadNow())
        mat4.multiply(mvMatrix, motionMatrix, mvMatrix)
    }
}

export default motion