import { mat4 } from 'gl-matrix'
import type Item from '$item/Item'

function translate(mvMatrix:mat4, item:Item){
    mat4.translate(mvMatrix, mvMatrix, item.location.translate)
}

export default translate