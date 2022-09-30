import type { Vec3 } from "$utils/Math"
import type Light from "$class/Light/Light"
import { get, type Writable } from "svelte/store"
import deepcopy from "$utils/Deepcopy"

function moving(store: Writable<Light>){

    let light = get(store)

    // Initialization
    if(light.effect.moving.on && !light.effect.moving.init){

        store.update(($store) => {
            $store.effect.moving.origin = deepcopy($store.location)
            return $store
        })

        let theta = 0, phi = 0, r = 100
        const update = (x:number) => (x+0.4) % (2*Math.PI)

        let process = setInterval(() => {

            store.update(($store) => {

                let location:Vec3 = [r*Math.cos(theta), r*Math.sin(phi), r*Math.sin(theta)]
                $store.location = location
                theta = update(theta)
                phi = update(phi)

                if(!$store.effect.moving.on){
                    clearInterval(process)
                    if($store.effect.moving.init)
                        $store.location = $store.effect.moving.origin
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