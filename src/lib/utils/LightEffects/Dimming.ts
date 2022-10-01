import Tool from "$utils/Tool"
import { get } from "svelte/store"
import type { LightStore } from "$utils/Type"

function dimming(store: LightStore){

    let light = get(store)

    store.update(($store) => {

        if(light.effect.dimming.on){
            $store.effect.reset()
            $store.effect.dimming.on = true
            $store.effect.dimming.init = true
            $store.color.setByLevel = [0,0,0]
        }
        else if(light.effect.dimming.init){
            $store.color.setByLevel = [1,1,1]
        }

        $store.effect.dimming.init = $store.effect.dimming.on
        return $store
    })
}

export default dimming