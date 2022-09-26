import Light from '$class/Light'
import { writable } from 'svelte/store'
import type { LightStore } from '$utils/Type'

export let LightStoreList: LightStore[] = []

for(let i=0; i<3; i++){

    let light = new Light()
    light.location.origin = [(i-1)*100, 0, 0]

    let store = writable(light)
    LightStoreList.push(store)
}