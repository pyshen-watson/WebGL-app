import type { LightStore } from '$utils/Type'
import { writable } from 'svelte/store'


export let LightStoreList: LightStore[] = []

for(let i=0; i<3; i++){

    let store:LightStore = writable({

        location: [(i-1)*100, 0, 0],
        color: [1, 1, 1],

        motion_flashing: {on:false, init:false, origin:[0,0,0]},
        motion_changing: {on:false, init:false, origin:[0,0,0]},
        motion_moving: {on:false, init:false, origin:[0,0,0]},
        motion_dimming: {on:false, init:false, origin:[0,0,0]}
    })

    LightStoreList.push(store)
}