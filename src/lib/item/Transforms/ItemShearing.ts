import { vec3, glMatrix } from 'gl-matrix'

class Shearing{

    degree: vec3

    constructor(){
        this.degree = vec3.fromValues(0,0,0)
    }
}

export default Shearing