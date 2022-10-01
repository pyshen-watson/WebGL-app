import { mat4, glMatrix } from 'gl-matrix'
import type Item from 'src/lib/item/Item'

const toRadian = glMatrix.toRadian

function shear(mvMatrix:mat4, item:Item){

    let shearMatrix = mat4.create()
    mat4.identity(shearMatrix)

    let degree = item.shearing.degree
    shearMatrix[4] = Math.tan(toRadian(degree[0]))
    shearMatrix[1] = Math.tan(toRadian(degree[1]))
    shearMatrix[6] = Math.tan(toRadian(degree[2]))

    mat4.multiply(mvMatrix, shearMatrix, mvMatrix)
}

export default shear