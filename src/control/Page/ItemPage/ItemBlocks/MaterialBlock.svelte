<script lang="ts">
    import Bar from "$components/Bar.svelte"
    import { MaterialName } from "$class/Item/Material"

    import type { Writable } from "svelte/store"
    import type Item from "$class/Item/Item"

    export let store: Writable<Item>

    let MaterialRange = {
        Ka: [-0.5, 1.5, 0.1],
        Kd: [-0.5, 1.5, 0.1],
        Ks: [-0.5, 1.5, 0.1],
        Shininess: [-1.0, 5.0, 0.1]
    }

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

