<script lang="ts">
    import LightBlock from "./LightBlock.svelte"
    import { LightRepoList } from "$repo/LightRepo"
</script>

<div>
    {#each LightRepoList as lightRepo}
        <LightBlock store={lightRepo.getStore()}/>
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