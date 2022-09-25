<script lang="ts">
    import type { LightStore } from "$utils/Type"
    import Bar from "$components/Bar.svelte"

    export let store: LightStore

    const colorResetHandler = (e:CustomEvent) => {
        $store.color = [1,1,1]
    }
</script>

<div>
    <Bar title="R" --color="red"   eventName="ColorReset" on:ColorReset={colorResetHandler} bind:value={$store.color[0]} range={[0, 15, 1]} displayValue={true} />
    <Bar title="G" --color="green" eventName="ColorReset" on:ColorReset={colorResetHandler} bind:value={$store.color[1]} range={[0, 15, 1]} displayValue={true} />
    <Bar title="B" --color="blue"  eventName="ColorReset" on:ColorReset={colorResetHandler} bind:value={$store.color[2]} range={[0, 15, 1]} displayValue={true} />
</div>

<style lang="scss">
    div{
        display: grid;
    }
</style>