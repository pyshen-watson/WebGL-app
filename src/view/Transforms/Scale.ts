import { mat4 } from 'gl-matrix'
import type Item from '$class/Item/Item'

function scale(mvMatrix:mat4, item:Item){

    mat4.scale(mvMatrix, mvMatrix, item.scaling.ratio)
    return mvMatrix
}

export default scale