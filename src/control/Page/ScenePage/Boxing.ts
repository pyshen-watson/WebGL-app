import { webglStore } from '$store/WebGLStore'
import { ItemStoreList } from '$store/ItemStore'
import { LightStoreList } from '$store/LightStore'
import { changeModel } from '$store/ModelStore'
import Rotation from '$class/Rotation'
import ItemMotionList from '$class/ItemMotionList'
import Light from '$class/Light'
import Material from '$class/Material'


let scene = {

    name: "Boxing" ,
    src: "src/asset/image/boxing.png",
    func: () => {

        ItemStoreList[0].update(($store) => {

            $store.rotation = new Rotation()
            $store.shaderName = 'Gouraud'
            changeModel(ItemStoreList[0], 'Kangaroo')

            $store.location.shift = [40, 30, 0]
            $store.rotation.degree = [-90, 0, 50]
            $store.rotation.auto = false
            $store.scaling.ratio = [1, 1, 1]
            $store.shearing.degree = [0,0,0]
            $store.motion = new ItemMotionList()
            $store.material = new Material()
            $store.motion.vibing.on = true
            $store.motion.jumping.on = true
            $store.motion.shaking.on = true
            $store.motion.swinging.on = true

            return $store
        })

        ItemStoreList[1].update(($store) => {

            $store.rotation = new Rotation()
            $store.shaderName = 'Gouraud'
            changeModel(ItemStoreList[1], 'Moai')

            $store.location.shift = [0, -5, -150]
            $store.rotation.speed = 3000
            $store.rotation.direction = [0, 0, 1]
            $store.scaling.ratio = [5, 1, 1]
            $store.shearing.degree = [0, 0, 80]
            $store.motion = new ItemMotionList()
            $store.material = new Material()
            $store.motion.crazy.on = true
            $store.motion.swinging.on = true

            return $store
        })

        ItemStoreList[2].update(($store) => {

            $store.rotation = new Rotation()
            $store.shaderName = 'Gouraud'
            changeModel(ItemStoreList[2], 'Kangaroo')

            $store.location.shift = [-40, 30, 0]
            $store.rotation.degree = [-90, 0, -45]
            $store.rotation.auto = false
            $store.scaling.ratio = [1, 1, 1]
            $store.shearing.degree = [0,0,0]
            $store.motion = new ItemMotionList()
            $store.material = new Material()
            $store.motion.vibing.on = true
            $store.motion.jumping.on = true
            $store.motion.shaking.on = true
            $store.motion.swinging.on = true

            return $store
        })

        LightStoreList[0].update(($store) => {
            $store = new Light()
            $store.color = [5,5,2]
            $store.motion.flashing.on = true
            return $store
        })

        LightStoreList[1].update(($store) => {
            $store = new Light()
            $store.color = [15,0,0]
            $store.motion.flashing.on = true
            return $store
        })

        LightStoreList[2].update(($store) => {
            $store = new Light()
            $store.color = [5,5,2]
            $store.motion.flashing.on = true
            return $store
        })

        webglStore.update(($store) => {
            $store.setColor(0.2, 0, 0, 1)
            return $store
        })
    }

}

export default scene