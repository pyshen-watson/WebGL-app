import { mat4 } from 'gl-matrix'
import type { Vec3, Item } from '$utils/Type'

function scale(mvMatrix:mat4, item:Item){

    let ratio:Vec3 = [0, 0, 0]
    for(let i=0; i<3; i++)
        ratio[i] = item.scaling_origin[i] * item.scaling_ratio[i]

    mat4.scale(mvMatrix, mvMatrix, ratio)
    return mvMatrix
}

export default scale