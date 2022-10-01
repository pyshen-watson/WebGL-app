import { mat4 } from 'gl-matrix'
import type Item from 'src/lib/item/Item'

function scale(mvMatrix:mat4, item:Item){
    mat4.scale(mvMatrix, mvMatrix, item.scaling.ratio)
}

export default scale