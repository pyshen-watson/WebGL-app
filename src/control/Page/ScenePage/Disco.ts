import { webglStore } from '$store/WebGLStore'
import { ItemStoreList } from '$store/ItemStore'
import { LightStoreList } from '$store/LightStore'
import { changeModel } from '$store/ModelStore'
import Rotation from '$class/Rotation'
import ItemMotionList from '$class/ItemMotionList'


let scene = {

    name: "Disco" ,
    src: "src/asset/image/disco.png",
    func: () => {

        ItemStoreList[0].update(($store) => {

            $store.rotation = new Rotation()
            $store.shaderName = 'Gouraud'
            changeModel(ItemStoreList[0], 'Moai')

            $store.location.shift = [40, 0, 0]
            $store.rotation.degree = [-90, 0, 50]
            $store.rotation.auto = false
            $store.scaling.ratio = [1, 1, 1]
            $store.shearing.degree = [0, 0, 0]
            $store.motion = new ItemMotionList()
            $store.motion.vibing.on = true

            return $store
        })

        ItemStoreList[1].update(($store) => {

            $store.rotation = new Rotation()
            $store.shaderName = 'Flat'
            changeModel(ItemStoreList[1], 'Teapot')

            $store.location.shift = [0, 50, 0]
            $store.scaling.ratio = [3, 3, 3]
            $store.shearing.degree = [0, 0, 0]
            $store.motion = new ItemMotionList()
            return $store
        })

        ItemStoreList[2].update(($store) => {

            $store.rotation = new Rotation()
            $store.shaderName = 'Gouraud'
            changeModel(ItemStoreList[2], 'Kangaroo')

            $store.location.shift = [-40, 20, 0]
            $store.rotation.degree = [-90, 0, -45]
            $store.rotation.auto = false
            $store.scaling.ratio = [1, 1, 1]
            $store.shearing.degree = [0, 0, 0]
            $store.motion = new ItemMotionList()
            $store.motion.jumping.on = true

            return $store
        })

        LightStoreList[0].update(($store) => {
            $store.motion.dimming.on = true
            return $store
        })

        LightStoreList[1].update(($store) => {
            $store.motion.flashing.on = true
            $store.motion.changing.on = true
            $store.motion.moving.on = true
            return $store
        })

        LightStoreList[2].update(($store) => {
            $store.motion.dimming.on = true
            return $store
        })

        webglStore.update(($store) => {
            $store.setColor(0.2, 0.1, 0.2, 1)
            return $store
        })
    }

}

export default scene