<script lang="ts">
    import Bar from "$components/Bar.svelte"
    import MaterialName, {MaterialRange} from "$item/MaterialName"
    import type { ItemStore } from "$utils/Type"

    export let store: ItemStore
</script>

<div>
    {#each Object.values(MaterialName) as name}
        <Bar
            title ={name}
            bind:value={$store.material[name]}
            range={MaterialRange[name]}
            eventName="resetMaterial"
            on:resetMaterial={(e) => {$store.material.reset(e.detail); $store=$store}}
        />
    {/each}
</div>

<style>
    div{
        display: grid;
        height: 100%;
        row-gap: 3rem;
    }
</style>

