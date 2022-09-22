import type Item from '$type/Item'
import Store from '$class/Store'
import { getNow } from '$utils/TimeTools'
import deepcopy from '$utils/Deepcopy'

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

let ItemStoreList: Store<Item>[] = []

for(let i=0; i<3; i++){
    let item = deepcopy(defaultItem)
    item.shaderName = defaultShaderName[i]
    item.location = defaultLocation[i]

    let store = new Store(item)
    ItemStoreList.push(store)
}

export default ItemStoreList
