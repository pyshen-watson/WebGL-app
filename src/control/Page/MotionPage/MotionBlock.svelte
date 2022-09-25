<script lang="ts">
    import type { ItemRepo, ItemStore } from "$utils/Type"
    import Switch from "$components/Switch.svelte"

    export let repo: ItemRepo
    let store:ItemStore = repo.getStore()
</script>

<div>
    <Switch title="Vibing" bind:value={$store.motion_vibing}/>
    <Switch title="Shaking" bind:value={$store.motion_shaking}/>
    <Switch title="Nodding" bind:value={$store.motion_nodding}/>
    <Switch title="Jumping" bind:value={$store.motion_jumping}/>
    <Switch title="Running" bind:value={$store.motion_running}/>
    <Switch title="Backing" bind:value={$store.motion_backing}/>
    <Switch title="Crazy Rotate" bind:value={$store.motion_crazy}/>
    <Switch title="Swinging" bind:value={$store.motion_swinging}/>
</div>

<style lang="scss">
    div{
        box-sizing: border-box;
        width: 100%;
        height: 70%;
        padding: 1rem;
        border-right: 2px solid rgba(gray, 0.3);

        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
    }

</style>