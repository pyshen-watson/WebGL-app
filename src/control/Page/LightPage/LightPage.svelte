<script lang="ts">
    import LightBlock from "./LightBlock.svelte"
    import LightDB from "$class/Light/LightDB"
</script>

<div>
    {#each LightDB.db as store}
        <LightBlock {store}/>
    {/each}
</div>

<style lang="scss">
    div{
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>