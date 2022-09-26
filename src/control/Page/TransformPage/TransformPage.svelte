<script lang="ts">
    import { ItemStoreList } from "$store/ItemStore";
    import TransformBlock from "./TransformBlock.svelte"
</script>

<div>
    {#each ItemStoreList as store}
        <TransformBlock {store}/>
    {/each}
</div>

<style lang="scss">
    div{
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 1rem;
    }
</style>