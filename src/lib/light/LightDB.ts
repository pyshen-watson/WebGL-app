import Light from './Light'
import { get } from 'svelte/store'
import type { LightStore } from '$utils/Type'

class LightDB {

    static db: LightStore[] = []

    static init(numLight: number){

        for(let i=0; i<numLight; i++){
            let store = new Light(i).toStore()
            this.db.push(store)
        }
    }

    public static getStore(index: number){
        return this.db[index]
    }

    static getInstance(index: number){
        return get(this.db[index])
    }
}

export default LightDB
