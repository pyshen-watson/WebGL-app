import { vec3 } from 'gl-matrix'

class Scaling{

    ratio_model: vec3
    ratio_control: vec3

    constructor(){
        this.ratio_control = vec3.fromValues(1,1,1)
        this.ratio_model = vec3.fromValues(1,1,1)
    }

    get ratio(): vec3 {
        let out = vec3.create()
        return vec3.multiply(out, this.ratio_model, this.ratio_control)
    }

    set allRatio(r:number){
        this.ratio_control = vec3.fromValues(r,r,r)
    }
}

export default Scaling