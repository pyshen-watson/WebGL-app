import { mat4, glMatrix } from 'gl-matrix'
import type Item from 'src/lib/item/Item'

const toRadian = glMatrix.toRadian

function rotate(mvMatrix:mat4, item:Item){

    let degree = item.rotation.degree

    for(let i=0; i<3; i++){
        let radian = toRadian(degree[i])
        let axis = item.getAxis(i)
        mat4.rotate(mvMatrix, mvMatrix, radian, axis)
    }

    if(item.rotation.auto || item.motion.crazy.on){
        item.rotation.tick(item.motion.crazy.on)
        let radian = toRadian(item.rotation.lastAngle)
        let axis = item.getAxis(1)
        mat4.rotate(mvMatrix, mvMatrix, radian, axis)
    }

}

export default rotate