import type { Vec3 } from '$utils/Type'

class Location{

    origin: Vec3 = [0,0,0]
    shift:  Vec3 = [0,0,0]

    get coordinate():Vec3{
        let sum:Vec3 = [0,0,0]
        sum.forEach((_,i,arr) => {arr[i] = this.origin[i] + this.shift[i]})
        return sum
    }
}

export default Location