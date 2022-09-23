<script lang="ts">
    import LightBlock from "./LightBlock.svelte"
    import { LightStoreList } from "$store/LightStore"
</script>

<div>
    {#each LightStoreList as lightStore}
        <LightBlock {lightStore}/>
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