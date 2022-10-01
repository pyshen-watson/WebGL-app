import Tool from "$utils/Tool"
import Color from "$utils/Color"
import { get } from "svelte/store"
import type { LightStore } from "$utils/Type"

function moving(store: LightStore){

    let light = get(store)

    // Initialization
    if(light.effect.moving.on && !light.effect.moving.init){

        store.update(($store) => {
            $store.effect.moving.temp = Tool.deepcopy($store.location.shift)
            return $store
        })

        let theta = 0, phi = 0, r = 100
        const update = (x:number) => (x+0.4) % (2*Math.PI)

        let process = setInterval(() => {

            store.update(($store) => {

                $store.location.shift = [r*Math.cos(theta), r*Math.sin(phi), r*Math.sin(theta)]
                theta = update(theta)
                phi = update(phi)

                if(!$store.effect.moving.on){
                    clearInterval(process)
                    if($store.effect.moving.init)
                        $store.location.shift = $store.effect.moving.temp
                }
                return $store
            })
        }, 30)
    }


    store.update(($store) => {
        $store.effect.moving.init = $store.effect.moving.on
        return $store
    })
}

export default moving