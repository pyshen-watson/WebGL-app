import { mat4 } from 'gl-matrix'
import type { Item } from '$utils/Type'

function translate(mvMatrix:mat4, item:Item){
    mat4.translate(mvMatrix, mvMatrix, item.location)
    return mvMatrix
}

export default translate