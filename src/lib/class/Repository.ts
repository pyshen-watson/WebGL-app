import { get, writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

class Repository<T>{

    private store:Writable<T>

    constructor(initValue:T){
        this.store = writable(initValue)
    }

    getStore = () => this.store
    getInstance = () => get(this.store)
    
    get = (key:string) => get(this.store)[key]
    set = (key:string, value:any) => {
        this.store.update(($store) => {
            $store[key] = value
            return $store
        })
    }
}

export default Repository
