import CanvasDB from '$canvas/CanvasDB'
import ItemDB from '$item/ItemDB'
import LightDB from '$light/LightDB'
import ModelName from '$model/ModelName'
import ShaderName from '$shader/ShaderName'


let scene = {

    name: "Boxing" ,
    src: "src/asset/image/scene/boxing.png",
    func: () => {

        const item0 = ItemDB.getInstance(0)
        item0.reset()
        item0.changeModel(ModelName.Kangaroo)
        item0.shaderName = ShaderName.Gouraud
        item0.location.shift_control = [40, 30, 0]
        item0.rotation.degree_control = [-90, 0, 50]
        item0.rotation.auto = false
        item0.scaling.ratio_control = [1, 1, 1]
        item0.shearing.degree = [0,0,0]
        item0.motion.vibing.on = true
        item0.motion.jumping.on = true
        item0.motion.dancing.on = true
        item0.motion.swinging.on = true

        const item1 = ItemDB.getInstance(1)
        item1.reset()
        item1.changeModel(ModelName.Moai)
        item1.shaderName = ShaderName.Gouraud
        item1.location.shift_control = [0, -5, -150]
        // item1.rotation.degree_control = [0,1,2]
        item1.rotation.speed = 3000
        item1.scaling.ratio_control = [5, 1, 1]
        item1.shearing.degree = [0, 0, 80]
        item1.motion.crazy.on = true
        item1.motion.swinging.on = true


        const item2 = ItemDB.getInstance(2)
        item2.reset()
        item2.changeModel(ModelName.Kangaroo)
        item2.shaderName = ShaderName.Gouraud
        item2.location.shift_control = [-40, 30, 0]
        item2.rotation.degree_control = [-90, 0, -45]
        item2.rotation.auto = false
        item2.scaling.ratio_control = [1, 1, 1]
        item2.shearing.degree = [0,0,0]
        item2.motion.vibing.on = true
        item2.motion.jumping.on = true
        item2.motion.dancing.on = true
        item2.motion.swinging.on = true

        // LightStoreList[0].update(($store) => {

        //     $store.reset()
        //     $store.color = [5,5,2]
        //     return $store
        // })

        // LightStoreList[1].update(($store) => {

        //     $store.reset()
        //     $store.color = [15,0,0]
        //     return $store
        // })

        // LightStoreList[2].update(($store) => {

        //     $store.reset()
        //     $store.color = [5,5,2]
        //     return $store
        // })

        // webglStore.update(($store) => {
        //     $store.setColor(0.2, 0, 0, 1)
        //     return $store
        // })
    }

}

export default scene