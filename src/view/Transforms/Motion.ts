import { mat4 } from 'gl-matrix'
import { getRadNow } from '$utils/TimeTools'
import type Item from '$class/Item'
import type ItemMotion from '$class/ItemMotion'

const createIdentityMatrix = () => {
    let matrix = mat4.create()
    mat4.identity(matrix)
    return matrix
}

function motion(mvMatrix:mat4, item:Item){

    for(let attr in item.motion){

        let motion: ItemMotion = item.motion[attr]

        if(!motion.on)
            continue

        let motionMatrix = createIdentityMatrix()
        let index:number = motion.index
        let func:Function = motion.func
        motionMatrix[index] = func(getRadNow())
        mat4.multiply(mvMatrix, motionMatrix, mvMatrix)
    }
    return mvMatrix
}

export default motion