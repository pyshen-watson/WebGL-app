import { webglStore } from 'src/lib/database/WebGLStore'
import { ItemStoreList } from '$database/ItemDB'
import { LightStoreList } from 'src/lib/database/LightStore'
import { ModelName, ShaderName } from '$utils/Name'

import Material from '$class/Material'
import ItemMotionList from '$class/ItemMotionList'

let scene = {

    name: "Driving" ,
    src: "src/asset/image/driving.png",
    func: () => {

        ItemStoreList[0].update(($store) => {

            $store.changeModel(ModelName.Car)
            $store.shaderName = ShaderName.Gouraud
            $store.material = new Material()
            $store.motion = new ItemMotionList()

            $store.location.shift_control = [50, -25, -25]
            $store.rotation.degree = [-90, 0, 80]
            $store.rotation.auto = false
            $store.scaling.ratio_control = [2.5, 2.5, 2.5]

            $store.shearing.degree = [0, 0, 0]
            $store.material.Ka = 0.2
            $store.material.Kd = 0.2
            $store.material.Ks = 0.2

            return $store
        })

        ItemStoreList[1].update(($store) => {

            $store.changeModel(ModelName.Kangaroo)
            $store.shaderName = ShaderName.Gouraud
            $store.material = new Material()
            $store.motion = new ItemMotionList()

            $store.location.shift_control = [-45, 0, -45]
            $store.rotation.auto = false
            $store.rotation.degree = [-90, 0, -20]
            $store.scaling.ratio_control = [1, 1, 1]
            $store.shearing.degree = [0, 0, 0]

            $store.motion.vibing.on = true

            return $store
        })

        ItemStoreList[2].update(($store) => {

            $store.changeModel(ModelName.Church)
            $store.shaderName = ShaderName.Gouraud
            $store.material = new Material()
            $store.motion = new ItemMotionList()

            $store.location.shift_control = [120, -25, 0]
            $store.rotation.degree = [-90, 0, -240]
            $store.rotation.auto = false
            $store.scaling.ratio_control = [2, 2, 2]
            $store.shearing.degree = [0, 0, 0]

            $store.material.Ka = 0.2
            $store.material.Kd = 0.2
            $store.material.Ks = 0.2

            return $store
        })

        LightStoreList[0].update(($store) => {
            $store.reset()
            $store.motion.moving.on = true
            return $store
        })

        LightStoreList[1].update(($store) => {
            $store.reset()
            return $store
        })

        LightStoreList[2].update(($store) => {
            $store.reset()
            return $store
        })

        webglStore.update(($store) => {
            $store.setColor(0.5, 0.7, 0.7, 1)
            return $store
        })
    }

}

export default scene