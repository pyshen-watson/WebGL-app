<script lang="ts">
    import type { ItemStore } from "$utils/Type"
    import Bar from "$components/Bar.svelte"

    export let store:ItemStore
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

