<script lang="ts">
    import type { LightStore, Vec3 } from "$utils/Type"
    import Bar from "$components/Bar.svelte"

    export let store: LightStore
    let eventName = "ColorReset"
    let displayValue = true
    let range: Vec3 = [0, 15, 1]

    const colorResetHandler = (e:CustomEvent) => {
        $store.color = [1,1,1]
    }
</script>

<div>
    <Bar title="R" --color="red"   on:ColorReset={colorResetHandler} bind:value={$store.color[0]} {range} {displayValue} {eventName}/>
    <Bar title="G" --color="green" on:ColorReset={colorResetHandler} bind:value={$store.color[1]} {range} {displayValue} {eventName}/>
    <Bar title="B" --color="blue"  on:ColorReset={colorResetHandler} bind:value={$store.color[2]} {range} {displayValue} {eventName}/>
</div>

<style lang="scss">
    div{
        display: grid;
    }
</style>