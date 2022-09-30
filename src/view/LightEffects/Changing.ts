import { get, type Writable } from "svelte/store"
import { HSL2RGB } from "$utils/Math"
import deepcopy from "$utils/Deepcopy"
import type Light from "$class/Light/Light"

function changing(store: Writable<Light>){

    let light = get(store)

    // Initialization
    if(light.effect.changing.on && !light.effect.changing.init){

        store.update(($store) => {
            $store.effect.changing.origin = deepcopy($store.color)
            return $store
        })

        let counter = 0
        let process = setInterval(() => {

            store.update(($store) => {

                $store.color = HSL2RGB(counter/360, 1, 0.2)
                counter = (counter + 10) % 360

                if(!$store.effect.changing.on){
                    clearInterval(process)
                    if($store.effect.changing.init)
                        $store.color = $store.effect.changing.origin
                }
                return $store
            })
        }, 100)
    }


    store.update(($store) => {
        $store.effect.changing.init = $store.effect.changing.on
        return $store
    })
}

export default changing