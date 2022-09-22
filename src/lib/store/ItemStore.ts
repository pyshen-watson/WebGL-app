import Store from '$class/Store'
import { getNow } from '$utils/TimeTools'
import deepcopy from '$utils/Deepcopy'

export type Item = {

    shaderName: string
    modelName: string

    location: number[]

    rotation_degree: number[]
    rotation_direction: number[]
    rotation_auto: boolean
    rotation_speed: number
    rotation_lastAngle: number
    rotation_lastTime: number

    scaling_origin: number[]
    scaling_ratio: number[]

    shearing_direction: number[]
    shearing_degree: number[]

    material_Ka: number
    material_Kd: number
    material_Ks: number
    material_Shininess: number
}

let defaultItem: Item = {
    shaderName: "Flat",
    modelName: "Teapot",
    location: [0, 0, 0],
    rotation_degree: [0, 0, 0],
    rotation_direction: [0, 1, 0],
    rotation_auto: true,
    rotation_speed: 35,
    rotation_lastAngle: 0,
    rotation_lastTime: getNow(),
    scaling_origin: [1, 1, 1],
    scaling_ratio: [1, 1, 1],
    shearing_direction: [1, 0, 0],
    shearing_degree: [0, 0, 0],
    material_Ka: 0.1,
    material_Kd: 0.1,
    material_Ks: 0.1,
    material_Shininess: 1
}

let defaultShaderName = [
    "Flat",
    "Gouraud",
    "Phong"
]

let defaultLocation = [
    [-40, 0, -80],
    [0, 0, -80],
    [40, 0, -80],
]

export let ItemStoreList: Store<Item>[] = []

for(let i=0; i<3; i++){
    let item = deepcopy(defaultItem)
    item.shaderName = defaultShaderName[i]
    item.location = defaultLocation[i]

    let store = new Store(item)
    ItemStoreList.push(store)
}