import Item  from './Item'
import { get, type Writable } from 'svelte/store'

class ItemDB{

    public static db: Writable<Item>[] = []

    public static init(numItem: number){
        for(let i=0; i<numItem; i++){
            let store = new Item(i).toStore()
            this.db.push(store)
        }
    }

    public static getStore(index: number){
        return this.db[index]
    }

    public static getInstance(index: number){
        return get(this.db[index])
    }

}

export default ItemDB
