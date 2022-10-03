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
        item0.material.Ka = 0.3
        item0.material.Kd = 0.3

        item0.location.shift_control = [55, 0, 0]
        item0.rotation.degree_control = [0, 30, 0]
        item0.motion.vibing.turnOn()
        item0.motion.shaking.turnOn()
        item0.motion.jumping.turnOn()


        const item1 = ItemDB.getInstance(1)
        item1.reset()
        item1.changeModel(ModelName.Plant)
        item1.shaderName = ShaderName.Gouraud
        item1.material.Ks = 1.5

        item1.location.shift_control = [-30, 0, 0]
        item1.rotation.degree_control = [-90, 0, 0]
        item1.rotation.auto = true
        item1.rotation.speed = 3000
        item1.shearing.degree = [0, 0, 80]
        item1.motion.crazy.turnOn()


        const item2 = ItemDB.getInstance(2)
        item2.reset()
        item2.changeModel(ModelName.Kangaroo)
        item2.shaderName = ShaderName.Gouraud
        item2.material.Ka = 0.3
        item2.material.Kd = 0.3

        item2.location.shift_control = [-55, 0, 0]
        item2.rotation.degree_control = [0, -30, 0]
        item2.motion.vibing.turnOn()
        item2.motion.shaking.turnOn()
        item2.motion.dancing.turnOn()

        const light0 = LightDB.getInstance(0)
        light0.reset()
        light0.color.level = [1, 0, 0]

        const light1 = LightDB.getInstance(1)
        light1.reset()
        light1.color.level = [1, 1, 1]
        light1.effect.flashing.turnOn()

        const light2 = LightDB.getInstance(2)
        light2.reset()
        light2.color.level = [1, 0, 0]


        CanvasDB.setColor(0.4, 0.2, 0.2, 1)
    }

}

export default scene