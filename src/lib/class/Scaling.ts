import type { Vec3 } from '$utils/Type'

class Scaling{

    origin: Vec3 = [1,1,1]
    ratio:  Vec3 = [1,1,1]

    get sizing(): Vec3{
        let product:Vec3 = [0,0,0]
        product.forEach((_,i,arr) => {arr[i] = this.origin[i] * this.ratio[i]})
        return product
    }
}

export default Scaling