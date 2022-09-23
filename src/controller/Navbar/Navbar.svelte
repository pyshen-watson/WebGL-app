<script lang="ts">
    import { createEventDispatcher }from 'svelte'
    const dispatcher = createEventDispatcher()

    import NavbarTab from "./NavbarTab.svelte";

    export let selectID:number

    let titleList = [ "Item", "Light", "Motion", "Scene", "Info", "About" ]

</script>

<div>
    {#each titleList as title, id}
        <NavbarTab {title} {id} {dispatcher} active={selectID === id}/>
    {/each}
</div>

<style lang="scss">
    div{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid gray;
    }
</style>