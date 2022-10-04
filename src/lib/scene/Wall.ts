import CanvasDB from '$canvas/CanvasDB'
import ItemDB from '$item/ItemDB'
import LightDB from '$light/LightDB'
import ModelName from '$model/ModelName'
import ShaderName from '$shader/ShaderName'


let scene = {

    name: "Wall",
    func: () => {

        const item0 = ItemDB.getInstance(0)
        item0.reset()
        item0.changeModel(ModelName.Kangaroo)
        item0.shaderName = ShaderName.Cel
        item0.material.Ka = 1.5
        item0.material.Kd = -0.5
        item0.material.Ks = -0.5

        item0.location.shift_control = [0, 27, 0]
        item0.rotation.degree_control = [0, 25, 0]
        item0.scaling.ratio_control = [3, 2, 2.5]
        item0.motion.vibing.turnOn()


        const item1 = ItemDB.getInstance(1)
        item1.reset()
        item1.changeModel(ModelName.Church)
        item1.shaderName = ShaderName.Phong
        item1.material.Shininess = 0.1

        item1.location.shift_control = [165, -20, 0]
        item1.rotation.degree_control = [0, 62, 0]
        item1.scaling.ratio_control = [6, 2, 1]


        const item2 = ItemDB.getInstance(2)
        item2.reset()
        item2.changeModel(ModelName.Kangaroo)
        item2.shaderName = ShaderName.Cel
        item2.material.Ka = 1.5
        item2.material.Kd = -0.5
        item2.material.Ks = -0.5

        item2.location.shift_control = [-27, 28, -34]
        item2.rotation.degree_control = [16, 0, 0]
        item2.scaling.ratio_control = [3.5, 2, 2]
        item2.motion.jumping.turnOn()


        const light0 = LightDB.getInstance(0)
        light0.reset()
        light0.color.level = [2, 1, 1]

        const light1 = LightDB.getInstance(1)
        light1.reset()
        light1.color.level = [2, 1, 1]
        light1.effect.moving.turnOn()

        const light2 = LightDB.getInstance(2)
        light2.reset()
        light2.color.level = [2, 1, 1]

        CanvasDB.setColor(0.3, 0.2, 0.3, 1)
    }

}

export default scene