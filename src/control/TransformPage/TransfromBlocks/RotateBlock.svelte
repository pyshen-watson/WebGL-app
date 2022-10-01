<script lang="ts">
    import Bar from "$components/Bar.svelte"
    import Switch from "$components/Switch.svelte"
    import Direction from "../DirectionName"
    import type { ItemStore } from "$utils/Type"

    export let store: ItemStore
</script>

<div class="main">

    {#each Object.values(Direction) as direction, i }
        <Bar
            title={direction}
            bind:value={$store.rotation.degree_control[i]}
            range={[-180, 180, 1]}
            eventName="RotDegreeReset"
            on:RotDegreeReset={() => {$store.rotation.degree_control[i] = 0}}
        />
    {/each}

    <Bar
        title="Speed"
        bind:value={$store.rotation.speed}
        range={[0, 1200, 15]}
        eventName="RotSpeedReset"
        on:RotSpeedReset={() => {$store.rotation.speed = 30}}
    />

    <div class="button">
        <Switch
            title="Auto Rotate"
            bind:value={$store.rotation.auto}
        />
    </div>

</div>

<style lang="scss">
   .main{
        display: grid;
        row-gap: 2rem;

        .button{
            display: flex;
            justify-content: center;
        }
    }
</style>