import { get, type Writable } from "svelte/store"
import deepcopy from "$utils/Deepcopy"
import type Light from "$class/Light/Light"


function onLight(store: Writable<Light>){
    store.update(($store) => {
        $store.color.forEach((item, index, array) => {array[index] = item*3})
        return $store
    })
}

function offLight(store: Writable<Light>){
    store.update(($store) => {
        $store.color.forEach((item, index, array) => {array[index] = item/3})
        return $store
    })
}

function flashing(store:Writable<Light>){

    let light = get(store)

    // Initialization
    if(light.effect.flashing.on && !light.effect.flashing.init){

        store.update(($store) => {
            $store.effect.flashing.origin = deepcopy(light.color)
            return $store
        })

        let on = false
        let process = setInterval(() => {

            on = !on
            on ? onLight(store) : offLight(store)

            store.update(($store) => {

                if(!$store.effect.flashing.on){
                    clearInterval(process)
                    if($store.effect.flashing.init)
                        $store.color = $store.effect.flashing.origin
                }
                return $store
            })

        }, 100)
    }

    store.update(($store) => {
        $store.effect.flashing.init = $store.effect.flashing.on
        return $store
    })

}

export default flashing