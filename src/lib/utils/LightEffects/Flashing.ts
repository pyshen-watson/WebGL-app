import Tool from "$utils/Tool"
import { get } from "svelte/store"
import type { LightStore } from "$utils/Type"


function onLight(store:LightStore){
    store.update(($store) => {
        $store.color.level.forEach((item, index, array) => {array[index] = item*3})
        return $store
    })
}

function offLight(store: LightStore){
    store.update(($store) => {
        $store.color.level.forEach((item, index, array) => {array[index] = item/3})
        return $store
    })
}

function flashing(store: LightStore){

    let light = get(store)

    // Initialization
    if(light.effect.flashing.on && !light.effect.flashing.init){

        store.update(($store) => {
            $store.effect.flashing.temp = Tool.deepcopy(light.color.level)
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
                        $store.color.level = $store.effect.flashing.temp
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