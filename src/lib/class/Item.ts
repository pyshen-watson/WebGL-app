import Location from "./Location"
import Rotation from "./Rotation"
import Scaling from "./Scaling"
import Shearing from "./Shearing"
import Material from "./Material"
import ItemMotionList from "./ItemMotionList"

class Item{

    modelName:string
    shaderName:string
    location = new Location()
    rotation = new Rotation()
    scaling = new Scaling()
    shearing = new Shearing()
    material = new Material()
    motion = new ItemMotionList()

    constructor(modelName:string, shaderName:string){
        this.modelName = modelName
        this.shaderName = shaderName
    }
}

export default Item