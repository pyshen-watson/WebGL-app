import { mat4 } from 'gl-matrix'
import type Item from '$class/Item'

function translate(mvMatrix:mat4, item:Item){

    mat4.translate(mvMatrix, mvMatrix, item.location.position)
    return mvMatrix
}

export default translate