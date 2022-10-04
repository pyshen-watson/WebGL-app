import CanvasDB from '$canvas/CanvasDB'
import ItemDB from '$item/ItemDB'
import LightDB from '$light/LightDB'
import ModelName from '$model/ModelName'
import ShaderName from '$shader/ShaderName'


let scene = {

    name: "Watering",
    func: () => {

        const item0 = ItemDB.getInstance(0)
        item0.reset()
        item0.changeModel(ModelName.Teapot)
        item0.shaderName = ShaderName.Phong
        item0.material.Kd = 0.5

        item0.location.shift_control = [30, 30, 0]
        item0.rotation.degree_control = [0, -25, -45]
        item0.scaling.ratio_control = [1.5, 1.5, 1.5]


        const item1 = ItemDB.getInstance(1)
        item1.reset()
        item1.changeModel(ModelName.Moai)
        item1.shaderName = ShaderName.Gouraud
        item1.material.Shininess = -1

        item1.location.shift_control = [2, 0, 0]
        item1.rotation.degree_control = [0, 0, -16]
        item1.rotation.auto = true
        item1.rotation.speed = 3000
        item1.scaling.ratio_control = [0.2, 1, 0.2]


        const item2 = ItemDB.getInstance(2)
        item2.reset()
        item2.changeModel(ModelName.Plant)
        item2.shaderName = ShaderName.Gouraud
        item2.material.Ka = 1.5

        item2.location.shift_control = [-75, -45, 0]
        item2.rotation.degree_control = [0, -30, 0]
        item2.scaling.ratio_control = [2, 2, 2]


        const light0 = LightDB.getInstance(0)
        light0.reset()

        const light1 = LightDB.getInstance(1)
        light1.reset()
        light1.color.level = [0, 0, 0.5]

        const light2 = LightDB.getInstance(2)
        light2.reset()

        CanvasDB.setColor(0.3, 0.5, 0.3, 1)
    }

}

export default scene