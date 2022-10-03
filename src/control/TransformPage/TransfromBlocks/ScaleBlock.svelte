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
            bind:value={$store.scaling.ratio_control[i]}
            range={[0, 5, 0.5]}
            eventName="ScaleRatioReset"
            on:ScaleRatioReset={() => {$store.scaling.ratio_control[i] = 1}}
        />
    {/each}

    <Bar
        title="All"
        bind:value={$store.scaling.allRatio}
        range={[0, 5, 0.5]}
        eventName="ScaleAllReset"
        on:ScaleAllReset={() => {$store.scaling.ratio_control = [1,1,1]}}
        displayValue={false}
    />

</div>

<style lang="scss">
   .main{
        display: grid;
        row-gap: 2rem;
    }
</style>