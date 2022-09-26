<script lang="ts">
    import type { ItemStore, LightStore } from "$utils/Type"
    import Switch from "$components/Switch.svelte"

    export let itemStore: ItemStore
    export let lightStore: LightStore

</script>

<div class="main">
    <h2>Item Motion</h2>
    <div class="item">
        <Switch title="Vibing" bind:value={$itemStore.motion_vibing}/>
        <Switch title="Shaking" bind:value={$itemStore.motion_shaking}/>
        <Switch title="Nodding" bind:value={$itemStore.motion_nodding}/>
        <Switch title="Jumping" bind:value={$itemStore.motion_jumping}/>
        <Switch title="Running" bind:value={$itemStore.motion_running}/>
        <Switch title="Backing" bind:value={$itemStore.motion_backing}/>
        <Switch title="Crazy Rotating" bind:value={$itemStore.motion_crazy}/>
        <Switch title="Swinging" bind:value={$itemStore.motion_swinging}/>
    </div>
    <h2>Light Motion</h2>
    <div class="light">
        <Switch title="Flashing" bind:value={$lightStore.motion_flashing.on}/>
        <Switch title="Changing" bind:value={$lightStore.motion_changing.on}/>
        <Switch title="Moving" bind:value={$lightStore.motion_moving.on}/>
        <Switch title="Dimming" bind:value={$lightStore.motion_dimming.on}/>
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
            row-gap: 1rem;
            column-gap: 1rem;
        }
    }

</style>