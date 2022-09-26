import { mat4 } from 'gl-matrix'
import { degToRad } from '$utils/Math'
import type { Item } from '$utils/Type'

function shear(mvMatrix:mat4, item:Item){

    let shearMatrix = mat4.create()
    mat4.identity(shearMatrix)

    shearMatrix[4] = Math.tan(degToRad(item.shearing_degree[0]))
    shearMatrix[1] = Math.tan(degToRad(item.shearing_degree[1]))
    shearMatrix[6] = Math.tan(degToRad(item.shearing_degree[2]))

    mat4.multiply(mvMatrix, shearMatrix, mvMatrix)
    return mvMatrix
}

export default shear