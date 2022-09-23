<script lang="ts">
    import type Store from "$class/Store";
    import type { Item } from "$store/ItemStore"
    import ModelBlock from "./ModelBlock.svelte"
    export let itemStore: Store<Item>
</script>

<div>
    <h1>This is Item</h1>
    <ModelBlock {itemStore}/>
</div>

<style lang="scss">
    div{
        box-sizing: border-box;
        width: 100%;
        height: 70%;
        padding: 1rem;
        border-right: 2px solid rgba(gray, 0.3);
    }

</style>