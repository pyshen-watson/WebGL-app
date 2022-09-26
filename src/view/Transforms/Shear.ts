import { mat4 } from 'gl-matrix'
import type Item from '$class/Item'

function shear(mvMatrix:mat4, item:Item){

    let shearMatrix = mat4.create()
    mat4.identity(shearMatrix)

    let radian = item.shearing.radian
    shearMatrix[4] = Math.tan(radian[0])
    shearMatrix[1] = Math.tan(radian[1])
    shearMatrix[6] = Math.tan(radian[2])

    mat4.multiply(mvMatrix, shearMatrix, mvMatrix)
    return mvMatrix
}

export default shear