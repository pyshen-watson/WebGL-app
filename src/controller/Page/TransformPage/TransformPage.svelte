<script lang="ts">
    import { ItemRepoList } from '$repo/ItemRepo'
    import TransformBlock from "./TransformBlock.svelte"
</script>

<div>
    {#each ItemRepoList as itemRepo}
        <TransformBlock store={itemRepo.getStore()}/>
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