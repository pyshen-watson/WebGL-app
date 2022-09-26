import { webglStore } from '$store/WebGLStore'
import { ItemStoreList } from '$store/ItemStore'
import { LightStoreList } from '$store/LightStore'
import { changeModel } from '$store/ModelStore'
import Rotation from '$class/Rotation'
import Material from '$class/Material'
import ItemMotionList from '$class/ItemMotionList'
import Light from '$class/Light'


let scene = {

    name: "Driving" ,
    src: "src/asset/image/driving.png",
    func: () => {

        ItemStoreList[0].update(($store) => {

            $store.rotation = new Rotation()
            $store.shaderName = 'Gouraud'
            changeModel(ItemStoreList[0], 'Car')

            $store.location.shift = [50, -25, -25]
            $store.rotation.degree = [-90, 0, 80]
            $store.rotation.auto = false
            $store.scaling.ratio = [2.5, 2.5, 2.5]
            $store.shearing.degree = [0, 0, 0]
            $store.motion = new ItemMotionList()
            $store.material = new Material()
            $store.material.Ka = 0.2
            $store.material.Kd = 0.2
            $store.material.Ks = 0.2


            return $store
        })

        ItemStoreList[1].update(($store) => {

            $store.rotation = new Rotation()
            $store.shaderName = 'Gouraud'
            changeModel(ItemStoreList[1], 'Kangaroo')

            $store.location.shift = [-45, 0, -45]
            $store.rotation.auto = false
            $store.rotation.degree = [-90, 0, -20]
            $store.scaling.ratio = [1, 1, 1]
            $store.shearing.degree = [0, 0, 0]
            $store.motion = new ItemMotionList()
            $store.material = new Material()
            $store.motion.vibing.on = true

            return $store
        })

        ItemStoreList[2].update(($store) => {

            $store.rotation = new Rotation()
            $store.shaderName = 'Gouraud'
            changeModel(ItemStoreList[2], 'Church')

            $store.location.shift = [120, -25, 0]
            $store.rotation.degree = [-90, 0, -240]
            $store.rotation.auto = false
            $store.scaling.ratio = [2, 2, 2]
            $store.shearing.degree = [0, 0, 0]
            $store.motion = new ItemMotionList()
            $store.material = new Material()
            $store.material.Ka = 0.2
            $store.material.Kd = 0.2
            $store.material.Ks = 0.2


            return $store
        })

        LightStoreList[0].update(($store) => {
            $store = new Light()
            $store.motion.moving.on = true
            return $store
        })

        LightStoreList[1].update(($store) => {
            $store = new Light()
            return $store
        })

        LightStoreList[2].update(($store) => {
            $store = new Light()
            return $store
        })

        webglStore.update(($store) => {
            $store.setColor(0.5, 0.7, 0.7, 1)
            return $store
        })
    }

}

export default scene