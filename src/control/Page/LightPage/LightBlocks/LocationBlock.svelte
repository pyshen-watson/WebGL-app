<script lang="ts">
    import Bar from "$components/Bar.svelte"
    import { Direction } from "$utils/Math"
    
    import type { Writable } from "svelte/store"
    import type Light from "$class/Light/Light"

    export let store: Writable<Light>

</script>

<div class="main">

    {#each Object.values(Direction) as direction, i }
        <Bar
            title={direction}
            bind:value={$store.location[i]}
            range={[-150, 150, 1]}
            eventName="LocShiftReset"
            on:LocShiftReset={() => {$store.location[i] = 0}}
        />
    {/each}

</div>

<style lang="scss">
    .main{
        display: grid;
        row-gap: 3rem;
    }
</style>