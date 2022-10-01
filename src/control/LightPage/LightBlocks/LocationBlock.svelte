<script lang="ts">
    import Bar from "$components/Bar.svelte"
    import Direction from "../DirectionName"
    import type { LightStore } from "$utils/Type"

    export let store: LightStore
</script>

<div class="main">

    {#each Object.values(Direction) as direction, i }
        <Bar
            title={direction}
            bind:value={$store.location.shift[i]}
            range={[-150, 150, 1]}
            eventName="LocShiftReset"
            on:LocShiftReset={() => {$store.location.shift[i] = 0}}
        />
    {/each}

</div>

<style lang="scss">
    .main{
        display: grid;
        row-gap: 3rem;
    }
</style>