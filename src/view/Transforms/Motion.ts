import { mat4 } from 'gl-matrix'
import type { Item } from '$utils/Type'
import { getRadNow } from '$utils/TimeTools'

const createIdentityMatrix = () => {
    let matrix = mat4.create()
    mat4.identity(matrix)
    return matrix
}

const motion_list = {

    motion_crazy:{
        index: 0,
        func: (x:number) => 1
    },
    motion_vibing:{
        index: 12,
        func: (x:number) => Math.cos(x)
    },
    motion_shaking:{
        index: 4,
        func: (x:number) => Math.cos(x)
    },
    motion_nodding:{
        index: 6,
        func: (x:number) => 0.5 * Math.sin(x)
    },
    motion_jumping:{
        index: 13,
        func: (x:number) => 3 * Math.sin(x)
    },
    motion_running:{
        index: 8,
        func: (x:number) => -Math.tan(x / 10)
    },
    motion_backing:{
        index: 8,
        func: (x:number) => Math.tan(x / 10)
    },
    motion_swinging:{
        index: 8,
        func: (x:number) => -Math.sin(x/6)
    },
}

function motion(mvMatrix:mat4, item:Item){

    for(let attr in item){

        if(!attr.includes('motion'))
            continue
        if(!item[attr])
            continue

        let motionMatrix = createIdentityMatrix()
        let index:number = motion_list[attr].index
        let func:Function = motion_list[attr].func
        motionMatrix[index] = func(getRadNow())
        mat4.multiply(mvMatrix, motionMatrix, mvMatrix)
    }
    return mvMatrix
}

export default motion