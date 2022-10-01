import { vec3 } from 'gl-matrix'
import Color from '$utils/Color'

class LightColor {

    level: vec3

    constructor(){
        this.reset()
    }

    get code(): string {
        return Color.Level2Code(this.level)
    }

    set setByLevel(level: vec3){
        this.level = level
    }

    set setByCode(code: string){
        this.level = Color.Code2Level(code)
    }

    reset(){
        this.level = vec3.fromValues(1,1,1)
    }

}

export default LightColor