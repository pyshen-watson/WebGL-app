import type { Vec3 } from '$utils/Type'
import { degToRad } from '$utils/Math'
import deepcopy from '$utils/Deepcopy'

class Shearing{

    degree:Vec3 = [0, 0, 0]

    get radian(): Vec3{
        let radian:Vec3 = deepcopy(this.degree)
        radian.forEach((value,i,arr) => {arr[i] = degToRad(value)})
        return radian
    }

}

export default Shearing