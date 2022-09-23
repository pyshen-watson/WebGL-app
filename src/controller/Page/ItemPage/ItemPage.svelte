<script lang="ts">
    import ItemBlock from "./ItemBlock.svelte"
    import { ItemStoreList } from "$store/ItemStore"
</script>

<div>
    {#each ItemStoreList as itemStore}
        <ItemBlock {itemStore}/>
    {/each}
</div>

<style lang="scss">
    div{
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding-top: 1rem;

    }
</style>