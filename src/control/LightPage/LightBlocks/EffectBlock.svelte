<script lang="ts">
    import Switch from "$components/Switch.svelte"
    import type { LightStore } from "$utils/Type"

    export let store: LightStore
    let flashing = $store.effect.flashing.on
    let changing = $store.effect.changing.on
    let moving = $store.effect.moving.on
    let dimming = $store.effect.dimming.on

    $:{
        changing ? $store.effect.changing.turnOn() : $store.effect.changing.turnOff()
        flashing ? $store.effect.flashing.turnOn() : $store.effect.flashing.turnOff()
        dimming ? $store.effect.dimming.turnOn() : $store.effect.dimming.turnOff()
        moving ? $store.effect.moving.turnOn() : $store.effect.moving.turnOff()
    }
    
</script>

<div class="main">
    <div class="grid">
        <Switch title="Flashing" bind:value={flashing}/>
        <Switch title="Changing" bind:value={changing}/>
        <Switch title="Moving" bind:value={moving}/>
        <Switch title="Dimming" bind:value={dimming}/>
    </div>
</div>

<style lang="scss">

    .main{

        width: 100%;
        box-sizing: border-box;
        padding: 0rem 5rem;

        .grid{

            display: grid;
            grid-template-columns: 1fr;
            row-gap: 3rem;

        }

    }

</style>