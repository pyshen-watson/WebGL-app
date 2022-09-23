<script lang="ts">
    import type { Light } from "$store/LightStore"
    import type { Writable } from "svelte/store"
    import type Store from "$class/Store"
    import Bar from "$components/Bar.svelte"

    export let lightStore:Store<Light>

    let store: Writable<Light> = lightStore.store

</script>

<div>
    <Bar title="R" --color="red"   bind:value={$store.color[0]} range={[0, 15, 1]} displayValue={true} />
    <Bar title="G" --color="green" bind:value={$store.color[1]} range={[0, 15, 1]} displayValue={true} />
    <Bar title="B" --color="blue"  bind:value={$store.color[2]} range={[0, 15, 1]} displayValue={true} />
</div>

<style lang="scss">
    div{
        display: grid;
    }

</style>