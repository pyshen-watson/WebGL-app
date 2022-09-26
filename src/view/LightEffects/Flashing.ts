import { get } from "svelte/store"
import type { LightStore } from "$utils/Type"
import deepcopy from "$utils/Deepcopy"


function onLight(store: LightStore){
    store.update(($store) => {
        $store.color.forEach((item, index, array) => {array[index] = item*3})
        return $store
    })
}
function offLight(store: LightStore){
    store.update(($store) => {
        $store.color.forEach((item, index, array) => {array[index] = item/3})
        return $store
    })
}

function flashing(store:LightStore){

    let light = get(store)

    // Initialization
    if(light.motion.flashing.on && !light.motion.flashing.init){

        store.update(($store) => {
            $store.motion.flashing.origin = deepcopy(light.color)
            return $store
        })

        let on = false
        let process = setInterval(() => {

            on = !on
            on ? onLight(store) : offLight(store)

            store.update(($store) => {

                if(!$store.motion.flashing.on){
                    clearInterval(process)
                    $store.color = $store.motion.flashing.origin
                }
                return $store
            })

        }, 100)
    }

    store.update(($store) => {
        $store.motion.flashing.init = $store.motion.flashing.on
        return $store
    })

}

export default flashing