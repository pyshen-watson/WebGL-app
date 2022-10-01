<script lang="ts">
    import ItemDB from "$item/ItemDB"
    import TransformBlock from "./TransformBlock.svelte"
</script>

<div>
    {#each ItemDB.db as store}
        <TransformBlock {store}/>
    {/each}
</div>

<style lang="scss">
    div{
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>