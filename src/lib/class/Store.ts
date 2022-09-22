import { get, writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

class Store{

    store:Writable<Object>

    constructor(initValue:Object){
        this.store = writable(initValue)
    }

    get(key:string){
        return get(this.store)[key]
    }

    set(key:string, value:any){
        this.store.update(($store) => {
            $store[key] = value
            return $store
        })
    }

}

export default Store
