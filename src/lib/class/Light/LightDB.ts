import Light from './Light'
import { get, type Writable } from 'svelte/store'

class LightDB {

    static db: Writable<Light>[] = []

    static init(){

        for(let i=0; i<3; i++){

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
