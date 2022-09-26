import { webglStore } from '$store/WebGLStore'
import { ItemStoreList } from '$store/ItemStore'
import { LightStoreList } from '$store/LightStore'
import { changeModel } from '$store/ModelStore'
import Rotation from '$class/Rotation'
import ItemMotionList from '$class/ItemMotionList'
import Light from '$class/Light'


let scene = {

    name: "Lake" ,
    src: "src/asset/image/watering.png",
    func: () => {

        ItemStoreList[0].update(($store) => {

            $store.rotation = new Rotation()
            $store.shaderName = 'Gouraud'
            changeModel(ItemStoreList[0], 'Teapot')

            $store.location.shift = [25, 0, 0]
            $store.rotation.degree = [0, 0, -45]
            $store.rotation.auto = false
            $store.scaling.ratio = [1.5, 1.5, 1.5]
            $store.shearing.degree = [0,0,0]
            $store.motion = new ItemMotionList()
            $store.motion.nodding.on = true
            $store.motion.jumping.on = true

            return $store
        })

        ItemStoreList[1].update(($store) => {

            $store.rotation = new Rotation()
            $store.shaderName = 'Gouraud'
            changeModel(ItemStoreList[1], 'Plant')

            $store.location.shift = [20, -35, 50]
            $store.rotation.auto = false
            $store.rotation.degree = [-90, 0, 0]
            $store.scaling.ratio = [1, 1, 1]
            $store.shearing.degree = [0, 0, 0]
            $store.motion = new ItemMotionList()

            return $store
        })

        ItemStoreList[2].update(($store) => {

            $store.rotation = new Rotation()
            $store.shaderName = 'Gouraud'
            changeModel(ItemStoreList[2], 'Teapot')

            $store.location.shift = [-15, 0, 0]
            $store.rotation.degree = [0, -200, -45]
            $store.rotation.auto = false
            $store.scaling.ratio = [1.5, 1.5, 1.5]
            $store.shearing.degree = [0,0,0]
            $store.motion = new ItemMotionList()
            $store.motion.nodding.on = true
            $store.motion.jumping.on = true

            return $store
        })

        LightStoreList[0].update(($store) => {
            $store = new Light()
            $store.color = [8,2,0]
            return $store
        })

        LightStoreList[1].update(($store) => {
            $store = new Light()
            $store.color = [0,15,15]
            $store.location.shift = [0,0,-150]
            return $store
        })

        LightStoreList[2].update(($store) => {
            $store = new Light()
            $store.color = [8,2,0]
            return $store
        })

        webglStore.update(($store) => {
            $store.setColor(0.3, 0.5, 0.3, 1)
            return $store
        })
    }

}

export default scene