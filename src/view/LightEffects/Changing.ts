import { get } from "svelte/store"
import deepcopy from "$utils/Deepcopy"
import { HSL2RGB } from "$utils/Math"
import type { LightStore } from "$utils/Type"

function changing(store:LightStore){

    let light = get(store)

    // Initialization
    if(light.motion_changing.on && !light.motion_changing.init){

        store.update(($store) => {
            $store.motion_changing.origin = deepcopy($store.color)
            return $store
        })

        let counter = 0
        let process = setInterval(() => {

            store.update(($store) => {

                $store.color = HSL2RGB(counter/360, 1, 0.2)
                counter = (counter + 10) % 360

                if(!$store.motion_changing.on){
                    clearInterval(process)
                    $store.color = $store.motion_changing.origin
                }
                return $store
            })
        }, 100)
    }


    store.update(($store) => {
        $store.motion_changing.init = $store.motion_changing.on
        return $store
    })
}

export default changing