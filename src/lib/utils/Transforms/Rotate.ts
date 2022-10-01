import { vec3, mat4, glMatrix } from 'gl-matrix'
import type Item from 'src/lib/item/Item'

const toRadian = glMatrix.toRadian

function rotateXYZ(mvMatrix: mat4, degree: vec3){
    mat4.rotateX(mvMatrix, mvMatrix, toRadian(degree[0]))
    mat4.rotateY(mvMatrix, mvMatrix, toRadian(degree[1]))
    mat4.rotateZ(mvMatrix, mvMatrix, toRadian(degree[2]))
}

function rotate(mvMatrix:mat4, item:Item){

    rotateXYZ(mvMatrix, item.rotation.degree_control)

    if(item.rotation.auto){
        item.rotation.tick(item.motion.crazy.on)
        mat4.rotateY(mvMatrix, mvMatrix, toRadian(item.rotation.lastAngle))
    }

    rotateXYZ(mvMatrix, item.rotation.degree_model)

}

export default rotate