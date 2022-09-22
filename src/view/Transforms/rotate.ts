import { mat4 } from 'gl-matrix'
import { degToRad } from '$utils/Math'
import { getNow } from '$utils/TimeTools'
import type Store from '$class/Store'
import type { Item } from '$store/ItemStore'

function rotate(mvMatrix:mat4, itemStore:Store<Item>){

    let item:Item = itemStore.getInstance()

    if(!item.rotation_auto){
        mat4.rotate(mvMatrix, mvMatrix, degToRad(item.rotation_degree[0]), [1,0,0])
        mat4.rotate(mvMatrix, mvMatrix, degToRad(item.rotation_degree[1]), [0,1,0])
        mat4.rotate(mvMatrix, mvMatrix, degToRad(item.rotation_degree[2]), [0,0,1])
        return mvMatrix
    }

    let now = getNow()
    let newAngle = item.rotation_lastAngle + item.rotation_speed * ((now - item.rotation_lastTime) / 1000)
    itemStore.set('rotation_lastAngle', newAngle)
    itemStore.set('rotation_lastTime', now)
    mat4.rotate(mvMatrix, mvMatrix, degToRad(item.rotation_lastAngle), item.rotation_direction)
    return mvMatrix
}

export default rotate