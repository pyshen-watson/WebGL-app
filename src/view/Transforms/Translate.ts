import { mat4 } from 'gl-matrix'
import type { Vec3, Item } from '$utils/Type'

function translate(mvMatrix:mat4, item:Item){

    let location:Vec3 = [0,0,0]
    for(let i=0; i<3; i++)
        location[i] = item.location_origin[i] + item.location_shift[i]

    mat4.translate(mvMatrix, mvMatrix, location)
    return mvMatrix
}

export default translate