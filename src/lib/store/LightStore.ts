import type Light from '$type/Light'
import Store from '$class/Store'

let defaultLocation = [
    [-100, 0, 0],
    [0, 0, 0],
    [100, 0, 0],
]

let LightStoreList: Store<Light>[] = []

for(let i=0; i<3; i++){

    let light:Light = {
        location: defaultLocation[i],
        color: [1, 1, 1]
    }

    let store = new Store(light)
    LightStoreList.push(store)
}

export default LightStoreList
