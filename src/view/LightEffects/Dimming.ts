import { get } from "svelte/store"
import deepcopy from "$utils/Deepcopy"
import type { LightStore } from "$utils/Type"

function dimming(store:LightStore){

    let light = get(store)

    // Initialization
    if(light.motion_dimming.on && !light.motion_dimming.init){

        store.update(($store) => {
            $store.motion_dimming.origin = deepcopy($store.color)
            $store.color = [0,0,0]
            return $store
        })

        let process = setInterval(() => {

            store.update(($store) => {
                $store.motion_flashing.on = false
                $store.motion_changing.on = false
                $store.motion_moving.on = false
                $store.color = [0,0,0]

                if(!$store.motion_dimming.on){
                    clearInterval(process)
                    $store.color = $store.motion_dimming.origin
                }
                return $store
            })

        },100)
    }

    store.update(($store) => {
        $store.motion_dimming.init = $store.motion_dimming.on
        return $store
    })
}

export default dimming