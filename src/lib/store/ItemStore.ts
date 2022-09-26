import Item  from '$class/Item'
import { writable } from 'svelte/store'
import type { ItemStore } from '$utils/Type'

const defaultShaderName = ["Flat", "Gouraud", "Phong"]

export let ItemStoreList: ItemStore[] = []

for(let i=0; i<3; i++){

    let item = new Item(defaultShaderName[i])
    item.location.origin = [ (i-1)*55, 0, -100]

    let store = writable(item)
    ItemStoreList.push(store)
}