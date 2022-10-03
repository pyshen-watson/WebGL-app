<script lang="ts">
    import Switch from "$components/Switch.svelte"
    import type { ItemStore } from "$utils/Type"

    export let store: ItemStore

    let reset = false

    $:{
        if(reset){
            $store.motion.reset()
            reset = false
        }
    }

</script>

<div class="main">
    <div class="grid">
        <Switch title="Vibing" bind:value={$store.motion.vibing.on}/>
        <Switch title="Shaking" bind:value={$store.motion.shaking.on}/>
        <Switch title="Dancing" bind:value={$store.motion.dancing.on}/>
        <Switch title="Jumping" bind:value={$store.motion.jumping.on}/>
        <Switch title="Running" bind:value={$store.motion.running.on}/>
        <Switch title="Backing" bind:value={$store.motion.backing.on}/>
        <Switch title="Crazy Rotating" bind:value={$store.motion.crazy.on}/>
        <Switch title="Swinging" bind:value={$store.motion.swinging.on}/>
    </div>
    <div class=reset>
        <Switch title="Reset Motions" bind:value={reset}/>
    </div>
</div>

<style lang="scss">

    .main{

        width: 100%;

        .grid{

            display: grid;
            grid-template-columns: 1fr 1fr;
            row-gap: 10%;
            column-gap: 10%;
        }

        .reset{
            display: flex;
            width: 100%;
            justify-content: center;
            padding-top: 30%;
        }
    }

</style>