<script lang="ts">

    import type { Item } from "$store/ItemStore"
    import type { Writable } from "svelte/store"
    import type Store from "$class/Store"
    import Bar from "$components/Bar.svelte"

    export let itemStore:Store<Item>
    let store:Writable<Item> = itemStore.store
</script>

<div>
    <Bar title="Ka" bind:value={$store.material_Ka} range={[-0.5,1.5,0.1]} displayValue={true}/>
    <Bar title="Kd" bind:value={$store.material_Kd} range={[-0.5,1.5,0.1]} displayValue={true}/>
    <Bar title="Ks" bind:value={$store.material_Ks} range={[-0.5,1.5,0.1]} displayValue={true}/>
    <Bar title="Sn" bind:value={$store.material_Shininess} range={[-1,5,0.1]} displayValue={true}/>
</div>

<style>
    div{
        width: 90%;
        display: grid;
    }
</style>

