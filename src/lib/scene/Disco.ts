import CanvasDB from '$canvas/CanvasDB'
import ItemDB from '$item/ItemDB'
import LightDB from '$light/LightDB'
import ModelName from '$model/ModelName'
import ShaderName from '$shader/ShaderName'


let scene = {

    name: "Disco",
    func: () => {

        const item0 = ItemDB.getInstance(0)
        item0.reset()
        item0.changeModel(ModelName.Moai)
        item0.shaderName = ShaderName.Gouraud
        item0.material.Ks = 1

        item0.location.shift_control = [50, 0, 0]
        item0.scaling.ratio_control = [1.5, 1.5, 1.5]
        item0.motion.vibing.turnOn()


        const item1 = ItemDB.getInstance(1)
        item1.reset()
        item1.changeModel(ModelName.Teapot)
        item1.shaderName = ShaderName.Flat
        item1.material.Shininess = 0.1

        item1.location.shift_control = [0, 80, 0]
        item1.rotation.auto = true
        item1.rotation.speed = 450
        item1.scaling.ratio_control = [3, 6, 3]
        item1.shearing.degree = [0, 0, -5]


        const item2 = ItemDB.getInstance(2)
        item2.reset()
        item2.changeModel(ModelName.Kangaroo)
        item2.shaderName = ShaderName.Gouraud
        item2.material.Ks = 1

        item2.location.shift_control = [-30, 25, -60]
        item2.scaling.ratio_control = [3, 3, 3]
        item2.motion.jumping.turnOn()

        const light0 = LightDB.getInstance(0)
        light0.reset()
        light0.effect.dimming.turnOn()

        const light1 = LightDB.getInstance(1)
        light1.reset()
        light1.location.shift = [0, 0, -60]
        light1.effect.flashing.turnOn()
        light1.effect.changing.turnOn()

        const light2 = LightDB.getInstance(2)
        light2.reset()
        light2.effect.dimming.turnOn()

        CanvasDB.setColor(0.1, 0.1, 0.1, 1)
    }

}

export default scene