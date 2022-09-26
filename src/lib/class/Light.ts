import type { Vec3 } from '$utils/Type'
import Location from './Location'
import LightMotionList from './LightMotionList'

class Light{

    color: Vec3 = [1,1,1]
    location = new Location()
    motion = new LightMotionList()
}

export default Light