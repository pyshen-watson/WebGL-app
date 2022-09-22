import { mat4 } from 'gl-matrix'
import type { Item } from '$store/ItemStore'

function translate(mvMatrix:mat4, item:Item){
    mat4.translate(mvMatrix, mvMatrix, item.location)
    return mvMatrix
}

export default translate