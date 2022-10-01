<script lang="ts">
    import Switch from "$components/Switch.svelte"
    import type { LightStore } from "$utils/Type"

    export let store: LightStore
    let reset = false

    $:{
        if(reset){
            $store.effect.reset()
            reset = false
        }
    }
</script>

<div class="main">
    <div class="grid">
        <Switch title="Flashing" bind:value={$store.effect.flashing.on}/>
        <Switch title="Changing" bind:value={$store.effect.changing.on}/>
        <Switch title="Moving" bind:value={$store.effect.moving.on}/>
        <Switch title="Dimming" bind:value={$store.effect.dimming.on}/>
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