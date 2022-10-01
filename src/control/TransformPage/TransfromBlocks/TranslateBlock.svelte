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
            bind:value={$store.location.shift_control[i]}
            range={[-150, 150, 1]}
            eventName="TranShiftReset"
            on:TranShiftReset={() => {$store.location.shift_control[i] = 0}}
        />
    {/each}

</div>

<style lang="scss">
    .main{
        display: grid;
        row-gap: 3rem;
    }
</style>