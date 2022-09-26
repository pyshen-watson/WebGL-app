import { get } from "svelte/store"
import deepcopy from "$utils/Deepcopy"
import type { LightStore, Vec3 } from "$utils/Type"

function moving(store:LightStore){

    let light = get(store)

    // Initialization
    if(light.motion.moving.on && !light.motion.moving.init){

        store.update(($store) => {
            $store.motion.moving.origin = deepcopy($store.location.shift)
            return $store
        })

        let theta = 0, phi = 0, r = 100
        const update = (x:number) => (x+0.4) % (2*Math.PI)

        let process = setInterval(() => {

            store.update(($store) => {

                let location:Vec3 = [r*Math.cos(theta), r*Math.sin(phi), r*Math.sin(theta)]
                $store.location.shift = location
                theta = update(theta)
                phi = update(phi)

                if(!$store.motion.moving.on){
                    clearInterval(process)
                    $store.location.shift = $store.motion.moving.origin
                }
                return $store
            })
        }, 30)
    }


    store.update(($store) => {
        $store.motion.moving.init = $store.motion.moving.on
        return $store
    })
}

export default moving