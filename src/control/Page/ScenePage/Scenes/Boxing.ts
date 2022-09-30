import { webglStore } from 'src/lib/database/WebGLStore'
import { ItemStoreList } from '$database/ItemDB'
import { LightStoreList } from 'src/lib/database/LightStore'

import Material from '$class/Material'
import ItemMotionList from '$class/ItemMotionList'
import { ModelName, ShaderName } from '$utils/Name'


let scene = {

    name: "Boxing" ,
    src: "src/asset/image/boxing.png",
    func: () => {

        ItemStoreList[0].update(($store) => {

            $store.changeModel(ModelName.Kangaroo)
            $store.shaderName = ShaderName.Gouraud
            $store.material = new Material()
            $store.motion = new ItemMotionList()

            $store.location.shift_control = [40, 30, 0]
            $store.rotation.degree = [-90, 0, 50]
            $store.rotation.auto = false
            $store.scaling.ratio_control = [1, 1, 1]
            $store.shearing.degree = [0,0,0]

            $store.motion.vibing.on = true
            $store.motion.jumping.on = true
            $store.motion.dancing.on = true
            $store.motion.swinging.on = true

            return $store
        })

        ItemStoreList[1].update(($store) => {

            $store.changeModel(ModelName.Moai)
            $store.shaderName = ShaderName.Gouraud
            $store.material = new Material()
            $store.motion = new ItemMotionList()

            $store.location.shift_control = [0, -5, -150]
            $store.rotation.speed = 3000
            $store.rotation.direction = [0, 0, 1]
            $store.scaling.ratio_control = [5, 1, 1]
            $store.shearing.degree = [0, 0, 80]

            $store.motion.crazy.on = true
            $store.motion.swinging.on = true

            return $store
        })

        ItemStoreList[2].update(($store) => {

            $store.changeModel(ModelName.Kangaroo)
            $store.shaderName = ShaderName.Gouraud
            $store.material = new Material()
            $store.motion = new ItemMotionList()

            $store.location.shift_control = [-40, 30, 0]
            $store.rotation.degree = [-90, 0, -45]
            $store.rotation.auto = false
            $store.scaling.ratio_control = [1, 1, 1]
            $store.shearing.degree = [0,0,0]

            $store.motion.vibing.on = true
            $store.motion.jumping.on = true
            $store.motion.dancing.on = true
            $store.motion.swinging.on = true

            return $store
        })

        LightStoreList[0].update(($store) => {

            $store.reset()
            $store.color = [5,5,2]
            return $store
        })

        LightStoreList[1].update(($store) => {

            $store.reset()
            $store.color = [15,0,0]
            return $store
        })

        LightStoreList[2].update(($store) => {

            $store.reset()
            $store.color = [5,5,2]
            return $store
        })

        webglStore.update(($store) => {
            $store.setColor(0.2, 0, 0, 1)
            return $store
        })
    }

}

export default scene