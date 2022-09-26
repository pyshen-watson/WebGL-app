import { get } from "svelte/store"
import deepcopy from "$utils/Deepcopy"
import type { LightStore } from "$utils/Type"

function dimming(store:LightStore){

    let light = get(store)

    // Initialization
    if(light.motion.dimming.on && !light.motion.dimming.init){

        store.update(($store) => {
            $store.motion.dimming.origin = deepcopy($store.color)
            $store.color = [0,0,0]
            return $store
        })

        let process = setInterval(() => {

            store.update(($store) => {
                $store.motion.flashing.on = false
                $store.motion.changing.on = false
                $store.motion.moving.on = false
                $store.color = [0,0,0]

                if(!$store.motion.dimming.on){
                    clearInterval(process)
                    $store.color = $store.motion.dimming.origin
                }
                return $store
            })

        },100)
    }

    store.update(($store) => {
        $store.motion.dimming.init = $store.motion.dimming.on
        return $store
    })
}

export default dimming