import { mat4 } from 'gl-matrix'
import { degToRad } from '$utils/Math'
import { getNow } from '$utils/TimeTools'
import { get } from 'svelte/store'
import type { Item, ItemStore } from '$utils/Type'

function rotate(mvMatrix:mat4, itemStore:ItemStore){

    let item = get(itemStore)

    if(item.rotation_auto){
        let now = getNow()
        let newAngle = item.rotation_lastAngle + item.rotation_speed * ((now - item.rotation_lastTime) / 1000)

        itemStore.update(($store) => {
            $store.rotation_lastAngle = newAngle
            if(!$store.motion_crazy)
                $store.rotation_lastTime = now
            return $store
        })

        mat4.rotate(mvMatrix, mvMatrix, degToRad(item.rotation_lastAngle), item.rotation_direction)
    }

    mat4.rotate(mvMatrix, mvMatrix, degToRad(item.rotation_degree[0]), [1,0,0])
    mat4.rotate(mvMatrix, mvMatrix, degToRad(item.rotation_degree[1]), [0,1,0])
    mat4.rotate(mvMatrix, mvMatrix, degToRad(item.rotation_degree[2]), [0,0,1])

    return mvMatrix
}

export default rotate