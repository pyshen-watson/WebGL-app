import { mat4, vec3 } from 'gl-matrix'
import type Item from 'src/lib/item/Item'

function scale(mvMatrix: mat4, item: Item){

    let ratio = vec3.fromValues(0,0,0)

    ratio.forEach((_, i, arr) => {
        arr[i] = item.scaling.ratio[item.axisOrder[i]]
    })

    mat4.scale(mvMatrix, mvMatrix, ratio)
}

export default scale