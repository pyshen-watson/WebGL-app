import Item  from './Item'
import { get } from 'svelte/store'
import type { ItemStore } from '$utils/Type'

class ItemDB{

    static db: ItemStore[] = []

    static init(numItem: number){
        for(let i=0; i<numItem; i++){
            let store = new Item(i).toStore()
            this.db.push(store)
        }
    }

    static getStore(index: number){
        return this.db[index]
    }

    static getInstance(index: number){
        return get(this.db[index])
    }
}

export default ItemDB
