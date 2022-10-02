import flashing from "./Flashing"
import moving from "./Moving"
import changing from "./Changing"
import dimming from "./Dimming"
import type { Writable } from "svelte/store"
import type Light from "$light/Light"

function applyLightEffects(store: Writable<Light>){
    flashing(store)
    moving(store)
    changing(store)
    dimming(store)
}

export default applyLightEffects