<script lang="ts">
    import type { ItemStore, LightStore } from "$utils/Type"
    import Switch from "$components/Switch.svelte"

    export let itemStore: ItemStore
    export let lightStore: LightStore

</script>

<div class="main">
    <h2>Item Motion</h2>
    <div class="item">
        <Switch title="Vibing" bind:value={$itemStore.motion.vibing.on}/>
        <Switch title="Shaking" bind:value={$itemStore.motion.shaking.on}/>
        <Switch title="Nodding" bind:value={$itemStore.motion.nodding.on}/>
        <Switch title="Jumping" bind:value={$itemStore.motion.jumping.on}/>
        <Switch title="Running" bind:value={$itemStore.motion.running.on}/>
        <Switch title="Backing" bind:value={$itemStore.motion.backing.on}/>
        <Switch title="Crazy Rotating" bind:value={$itemStore.motion.crazy.on}/>
        <Switch title="Swinging" bind:value={$itemStore.motion.swinging.on}/>
    </div>
    <h2>Light Motion</h2>
    <div class="light">
        <Switch title="Flashing" bind:value={$lightStore.motion.flashing.on}/>
        <Switch title="Changing" bind:value={$lightStore.motion.changing.on}/>
        <Switch title="Moving" bind:value={$lightStore.motion.moving.on}/>
        <Switch title="Dimming" bind:value={$lightStore.motion.dimming.on}/>
    </div>
</div>

<style lang="scss">
    .main{

        h2{
            margin-left: 2rem;
            color: rgba(white, 0.5);
        }

        div{

            box-sizing: border-box;
            width: 100%;
            padding: 1rem;
            border-right: 2px solid rgba(gray, 0.3);

            display: grid;
            grid-template-columns: 1fr 1fr;
            row-gap: 0.75rem;
            column-gap: 1rem;
        }
    }

</style>