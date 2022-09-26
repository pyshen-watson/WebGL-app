import { mat4 } from 'gl-matrix'
import { get } from 'svelte/store'
import { degToRad } from '$utils/Math'
import { getNow } from '$utils/TimeTools'
import type { ItemStore } from '$utils/Type'
import deepcopy from '$utils/Deepcopy'

function rotate(mvMatrix:mat4, itemStore:ItemStore){

    let item = get(itemStore)

    if(item.rotation.auto){

        item.rotation.tick(getNow(), item.motion.crazy.on)
        mat4.rotate(mvMatrix, mvMatrix, degToRad(item.rotation.lastAngle), item.rotation.direction)
    }

    let radian = item.rotation.radian
    mat4.rotate(mvMatrix, mvMatrix, radian[0], [1,0,0])
    mat4.rotate(mvMatrix, mvMatrix, radian[1], [0,1,0])
    mat4.rotate(mvMatrix, mvMatrix, radian[2], [0,0,1])

    return mvMatrix
}

export default rotate