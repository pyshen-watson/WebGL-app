import Tool from "$utils/Tool"
import Color from "$utils/Color"
import { get } from "svelte/store"
import type { LightStore } from "$utils/Type"

function changing(store: LightStore){

    let light = get(store)

    // Initialization
    if(light.effect.changing.on && !light.effect.changing.init){

        store.update(($store) => {
            $store.effect.changing.temp = Tool.deepcopy($store.color.level)
            return $store
        })

        let counter = 0
        let process = setInterval(() => {

            store.update(($store) => {

                $store.color.level = Color.HSL2RGB(counter/360, 1, 0.2)
                counter = (counter + 10) % 360

                if(!$store.effect.changing.on){
                    clearInterval(process)
                    if($store.effect.changing.init)
                        $store.color.level = $store.effect.changing.temp
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