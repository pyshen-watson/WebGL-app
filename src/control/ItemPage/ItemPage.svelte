<script lang="ts">
    import ItemDB from '$item/ItemDB'
    import ItemBlock from './ItemBlock.svelte'
</script>

<div>
    {#each ItemDB.db as store}
        <ItemBlock {store}/>
    {/each}
</div>

<style lang="scss">
    div{
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>