<script lang="ts">
    import ItemBlock from './ItemBlock.svelte'
    import { ItemRepoList } from '$repo/ItemRepo'
</script>

<div>
    {#each ItemRepoList as itemRepo}
        <ItemBlock repo={itemRepo}/>
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