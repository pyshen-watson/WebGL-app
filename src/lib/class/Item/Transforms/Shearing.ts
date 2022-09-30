import { newVec3, type Vec3 } from '$utils/Math'
import { Deg2Rad } from '$utils/Math'
import deepcopy from '$utils/Deepcopy'

class Shearing{

    degree = newVec3(0)

    get radian(): Vec3{
        let radian:Vec3 = deepcopy(this.degree)
        radian.forEach((value,i,arr) => {arr[i] = Deg2Rad(value)})
        return radian
    }

}

export default Shearing