import { newVec3, type Vec3 } from '$utils/Math'

class Location{

    anchor = newVec3() // Share by all models with the same id, ex. all item[1] have the same anchor
    shift_model = newVec3() // Share by all ids with the same model, ex. all Teapots have the same shift
    shift_control = newVec3() // This shift can be modified in store

    constructor(index: number){
        this.anchor =[ (index-1)*55, 0, -100]
    }

    get position():Vec3{
        let sum:Vec3 = [0,0,0]
        sum.forEach((_,i,arr) => {arr[i] = this.anchor[i] + this.shift_model[i] + this.shift_control[i]})
        return sum
    }

}

export default Location