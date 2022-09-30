import { mat4 } from 'gl-matrix'
import { Deg2Rad } from '$utils/Math'
import { getNow } from '$utils/TimeTools'
import type Item from '$class/Item/Item'

function rotate(mvMatrix:mat4, item:Item){

    mat4.rotate(mvMatrix, mvMatrix, Deg2Rad(item.rotation.degree_control[0]), [1,0,0])
    mat4.rotate(mvMatrix, mvMatrix, Deg2Rad(item.rotation.degree_control[1]), [0,1,0])
    mat4.rotate(mvMatrix, mvMatrix, Deg2Rad(item.rotation.degree_control[2]), [0,0,1])

    if(item.rotation.auto){
        item.rotation.tick(getNow(), item.motion.crazy.on)
        mat4.rotate(mvMatrix, mvMatrix, Deg2Rad(item.rotation.lastAngle), [0,1,0])
    }

    mat4.rotate(mvMatrix, mvMatrix, Deg2Rad(item.rotation.degree_model[0]), [1,0,0])
    mat4.rotate(mvMatrix, mvMatrix, Deg2Rad(item.rotation.degree_model[1]), [0,1,0])
    mat4.rotate(mvMatrix, mvMatrix, Deg2Rad(item.rotation.degree_model[2]), [0,0,1])


    return mvMatrix
}

export default rotate