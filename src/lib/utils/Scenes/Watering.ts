import { webglStore } from 'src/lib/database/WebGLStore'
import { ItemStoreList } from '$database/ItemDB'
import { LightStoreList } from 'src/lib/database/LightStore'

import { ModelName, ShaderName } from '$utils/Name'

import Material from '$class/Material'

let scene = {

    name: "Lake" ,
    src: "src/asset/image/watering.png",
    func: () => {

        ItemStoreList[0].update(($store) => {

            $store.changeModel(ModelName.Teapot)
            $store.shaderName = ShaderName.Gouraud
            $store.material = new Material()

            $store.location.shift_control = [25, 0, 0]
            $store.rotation.degree = [0, 0, -45]
            $store.rotation.auto = false
            $store.scaling.ratio_control = [1.5, 1.5, 1.5]
            $store.shearing.degree = [0,0,0]

            $store.motion.reset()
            $store.motion.dancing.on = true
            $store.motion.jumping.on = true

            return $store
        })

        ItemStoreList[1].update(($store) => {

            $store.changeModel(ModelName.Plant)
            $store.shaderName = ShaderName.Gouraud
            $store.material = new Material()

            $store.location.shift_control = [30, -50, 10]
            $store.rotation.auto = false
            $store.rotation.degree = [-90, 0, 0]
            $store.scaling.ratio_control = [1, 1, 1]
            $store.shearing.degree = [0, 0, 0]

            $store.motion.reset()

            return $store
        })

        ItemStoreList[2].update(($store) => {

            $store.changeModel(ModelName.Teapot)
            $store.shaderName = ShaderName.Gouraud
            $store.material = new Material()

            $store.location.shift_control = [-15, 0, 0]
            $store.rotation.degree = [0, -200, -45]
            $store.rotation.auto = false
            $store.scaling.ratio_control = [1.5, 1.5, 1.5]
            $store.shearing.degree = [0,0,0]

            $store.motion.reset()
            $store.motion.dancing.on = true
            $store.motion.jumping.on = true


            return $store
        })

        LightStoreList[0].update(($store) => {

            $store.reset()
            $store.color = [8,2,0]
            return $store
        })

        LightStoreList[1].update(($store) => {

            $store.reset()
            $store.color = [0,15,15]
            $store.location.shift_control = [0,0,-150]
            return $store
        })

        LightStoreList[2].update(($store) => {

            $store.reset()
            $store.color = [8,2,0]
            $store.location.shift_control = [0,0,-150]
            return $store
        })

        webglStore.update(($store) => {
            $store.setColor(0.3, 0.5, 0.3, 1)
            return $store
        })
    }

}

export default scene