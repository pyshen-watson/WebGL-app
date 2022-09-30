import deepcopy from "$utils/Deepcopy"
import type Light from "$class/Light/Light"
import { get, type Writable } from "svelte/store"

function dimming(store: Writable<Light>){

    let light = get(store)

    if(light.effect.dimming.on !== light.effect.dimming.init){

        if(!light.effect.dimming.init){

            store.update(($store) => {
                $store.effect.dimming.origin = deepcopy($store.color)
                return $store
            })
        }

        else{
            store.update(($store) => {
                $store.color = deepcopy($store.effect.dimming.origin)
                return $store
            })
        }
    }

    store.update(($store) => {

        if(light.effect.dimming.on){
            $store.effect.reset()
            $store.effect.dimming.on = true
            $store.effect.dimming.init = true
            $store.color = [0,0,0]
        }

        $store.effect.dimming.init = $store.effect.dimming.on
        return $store
    })
}

export default dimming