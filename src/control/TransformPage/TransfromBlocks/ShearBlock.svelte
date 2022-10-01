<script lang="ts">
    import Bar from "$components/Bar.svelte"
    import Direction from "../DirectionName"
    import type { ItemStore } from "$utils/Type"

    export let store: ItemStore
</script>

<div class="main">

    {#each Object.values(Direction) as direction, i }
        <Bar
            title={direction}
            bind:value={$store.shearing.degree[i]}
            range={[-90, 90, 1]}
            eventName="ShearDegreeReset"
            on:ShearDegreeReset={() => {$store.shearing.degree[i] = 0}}
        />
    {/each}

</div>

<style lang="scss">
   .main{
        display: grid;
        row-gap: 3rem;
    }
</style>