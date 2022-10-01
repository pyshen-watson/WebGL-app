import { webglStore } from 'src/lib/database/WebGLStore'
import { ItemStoreList } from '$database/ItemDB'
import { LightStoreList } from 'src/lib/database/LightStore'
import { ModelName, ShaderName } from '$utils/Name'

import Material from '$class/Material'
import ItemMotionList from '$class/ItemMotionList'


let scene = {

    name: "Disco" ,
    src: "src/asset/image/disco.png",
    func: () => {

        ItemStoreList[0].update(($store) => {

            $store.changeModel(ModelName.Moai)
            $store.shaderName = ShaderName.Gouraud
            $store.material = new Material()
            $store.motion = new ItemMotionList()

            $store.location.shift_control = [40, 0, 0]
            $store.rotation.degree = [-90, 0, 50]
            $store.rotation.auto = false
            $store.scaling.ratio_control = [1, 1, 1]
            $store.shearing.degree = [0, 0, 0]

            $store.motion.vibing.on = true

            return $store
        })

        ItemStoreList[1].update(($store) => {

            $store.changeModel(ModelName.Teapot)
            $store.shaderName = ShaderName.Flat
            $store.material = new Material()
            $store.motion = new ItemMotionList()

            $store.location.shift_control = [0, 50, 0]
            $store.rotation.speed = 30
            $store.scaling.ratio_control = [3, 3, 3]
            $store.shearing.degree = [0, 0, 0]

            $store.motion.reset()
            $store.material.reset()
            $store.material.Shininess = -0.5

            return $store
        })

        ItemStoreList[2].update(($store) => {

            $store.changeModel(ModelName.Kangaroo)
            $store.shaderName = ShaderName.Gouraud
            $store.material = new Material()
            $store.motion = new ItemMotionList()

            $store.location.shift_control = [-40, 20, 0]
            $store.rotation.degree = [-90, 0, -45]
            $store.rotation.auto = false
            $store.scaling.ratio_control = [1, 1, 1]
            $store.shearing.degree = [0, 0, 0]

            $store.motion.jumping.on = true

            return $store
        })

        LightStoreList[0].update(($store) => {

            $store.reset()
            $store.motion.flashing.on = true
            return $store
        })

        LightStoreList[1].update(($store) => {

            $store.reset()
            $store.motion.changing.on = true
            $store.motion.moving.on = true
            return $store
        })

        LightStoreList[2].update(($store) => {

            $store.reset()
            $store.motion.flashing.on = true
            return $store
        })

        webglStore.update(($store) => {
            $store.setColor(0.2, 0.1, 0.2, 1)
            return $store
        })
    }

}

export default scene