import { vec3, glMatrix, mat4 } from 'gl-matrix'
const toRadian = glMatrix.toRadian

class Shearing{

    degree: vec3

    constructor(){
        this.degree = vec3.fromValues(0,0,0)
    }

    apply(mvMatrix: mat4){

        let shearMatrix = mat4.create()
        mat4.identity(shearMatrix)

        shearMatrix[4] = Math.tan(toRadian(this.degree[0]))
        shearMatrix[1] = Math.tan(toRadian(this.degree[1]))
        shearMatrix[6] = Math.tan(toRadian(this.degree[2]))

        mat4.multiply(mvMatrix, shearMatrix, mvMatrix)
    }
}

export default Shearing