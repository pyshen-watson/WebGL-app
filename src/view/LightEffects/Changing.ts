import { get } from "svelte/store"
import deepcopy from "$utils/Deepcopy"
import { HSL2RGB } from "$utils/Math"
import type { LightStore } from "$utils/Type"

function changing(store:LightStore){

    let light = get(store)

    // Initialization
    if(light.motion.changing.on && !light.motion.changing.init){

        store.update(($store) => {
            $store.motion.changing.origin = deepcopy($store.color)
            return $store
        })

        let counter = 0
        let process = setInterval(() => {

            store.update(($store) => {

                $store.color = HSL2RGB(counter/360, 1, 0.2)
                counter = (counter + 10) % 360

                if(!$store.motion.changing.on){
                    clearInterval(process)
                    $store.color = $store.motion.changing.origin
                }
                return $store
            })
        }, 100)
    }


    store.update(($store) => {
        $store.motion.changing.init = $store.motion.changing.on
        return $store
    })
}

export default changing