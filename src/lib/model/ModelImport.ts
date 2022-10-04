import Car from '$asset/model/Car.json'
import Church from '$asset/model/Church.json'
import Kangaroo from '$asset/model/Kangaroo.json'
import Moai from '$asset/model/Moai.json'
import Plant from '$asset/model/Plant.json'
import Teapot from '$asset/model/Teapot.json'
import type ModelSource from '$model/ModelSource'

interface ModelSourceList{
    [ket:string]: ModelSource
}

const ModelList:ModelSourceList = {
    Car: Car,
    Church: Church,
    Kangaroo: Kangaroo,
    Moai: Moai,
    Plant: Plant,
    Teapot: Teapot
}

export default ModelList