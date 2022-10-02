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
        item0.location.shift_control = [50, 0, 0]
        item0.rotation.degree_control = [0, 30, 0]
        item0.motion.vibing.turnOn()
        item0.motion.jumping.turnOn()
        item0.motion.dancing.turnOn()
        item0.motion.swinging.turnOn()

        const item1 = ItemDB.getInstance(1)
        item1.reset()
        item1.changeModel(ModelName.Moai)
        item1.shaderName = ShaderName.Gouraud
        item1.location.shift_control = [0, 0, 30]
        item1.rotation.degree_control = [90, 0, 0]
        item1.rotation.auto = true
        item1.rotation.speed = 3000
        item1.scaling.ratio_control = [1, 3, 1]
        item1.motion.jumping.turnOn()
        item1.motion.swinging.turnOn()


        const item2 = ItemDB.getInstance(2)
        item2.reset()
        item2.changeModel(ModelName.Kangaroo)
        item2.shaderName = ShaderName.Gouraud
        item2.location.shift_control = [-50, 0, 0]
        item2.rotation.degree_control = [0, -30, 0]
        item2.motion.vibing.turnOn()
        item2.motion.jumping.turnOn()
        item2.motion.dancing.turnOn()
        item2.motion.swinging.turnOn()

        const light0 = LightDB.getInstance(0)
        light0.reset()
        light0.effect.dimming.turnOn()

        const light1 = LightDB.getInstance(1)
        light1.reset()
        light1.color.level = [4, 2, 1]
        light1.effect.flashing.turnOn()

        const light2 = LightDB.getInstance(2)
        light2.reset()
        light0.effect.dimming.turnOn()


        CanvasDB.setColor(0.2, 0, 0, 1)
    }

}

export default scene