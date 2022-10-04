import CanvasDB from '$canvas/CanvasDB'
import ItemDB from '$item/ItemDB'
import LightDB from '$light/LightDB'
import ModelName from '$model/ModelName'
import ShaderName from '$shader/ShaderName'


let scene = {

    name: "Driving",
    func: () => {

        const item0 = ItemDB.getInstance(0)
        item0.reset()
        item0.changeModel(ModelName.Car)
        item0.shaderName = ShaderName.Phong
        item0.material.Ka = 0.7
        item0.material.Ks = 0.3

        item0.location.shift_control = [37, 0, 0]
        item0.rotation.degree_control = [0, 180, 0]
        item0.motion.dancing.turnOn()

        const item1 = ItemDB.getInstance(1)
        item1.reset()
        item1.changeModel(ModelName.Kangaroo)
        item1.shaderName = ShaderName.Phong
        item1.material.Ka = 0.7

        item1.location.shift_control = [-27, -7, 0]
        item1.rotation.degree_control = [0, 93, 0]
        item1.scaling.ratio_control = [0.5, 0.5, 0.5]
        item1.motion.dancing.turnOn()


        const item2 = ItemDB.getInstance(2)
        item2.reset()
        item2.changeModel(ModelName.Plant)
        item2.shaderName = ShaderName.Cel
        item2.material.Ka = 0.7

        item2.location.shift_control = [0, -5, 0]
        item2.scaling.ratio_control = [0.5, 3, 0.5]
        item2.motion.backing.turnOn()

        const light0 = LightDB.getInstance(0)
        light0.reset()

        const light1 = LightDB.getInstance(1)
        light1.reset()
        light1.effect.moving.turnOn()

        const light2 = LightDB.getInstance(2)
        light2.reset()

        CanvasDB.setColor(0.6, 0.6, 0.3, 1)
    }

}

export default scene