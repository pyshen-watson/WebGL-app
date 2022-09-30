import { newVec3, type Vec3 } from '$utils/Math'

class Scaling{

    ratio_model = newVec3(1)
    ratio_control = newVec3(1)

    get ratio(): Vec3 {
        let product = newVec3(0)
        product.forEach((_,i,arr) => {arr[i] = this.ratio_model[i] * this.ratio_control[i]})
        return product
    }

    set allRatio(r:number){
        this.ratio_control = newVec3(r)
    }
}

export default Scaling