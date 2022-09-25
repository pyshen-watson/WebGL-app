<script lang="ts">
    import type { ItemStore } from "$utils/Type"
    import Bar from "$components/Bar.svelte"

    export let store:ItemStore
    let eventName:string = "resetMaterial"
    const resetHandler = (e:CustomEvent) => {
        if(e.detail==='Ka')
            $store.material_Ka = 0.1
        else if(e.detail === 'Kd')
            $store.material_Kd = 0.1
        else if(e.detail === 'Ks')
            $store.material_Ks = 0.1
        else
            $store.material_Shininess = 1
        }
</script>

<div>
    <Bar title="Ka" bind:value={$store.material_Ka} range={[-0.5,1.5,0.1]} displayValue={true} {eventName} on:resetMaterial={resetHandler}/>
    <Bar title="Kd" bind:value={$store.material_Kd} range={[-0.5,1.5,0.1]} displayValue={true} {eventName} on:resetMaterial={resetHandler}/>
    <Bar title="Ks" bind:value={$store.material_Ks} range={[-0.5,1.5,0.1]} displayValue={true} {eventName} on:resetMaterial={resetHandler}/>
    <Bar title="Sn" bind:value={$store.material_Shininess} range={[-1,5,0.1]} displayValue={true} {eventName} on:resetMaterial={resetHandler}/>
</div>

<style>
    div{
        width: 90%;
        display: grid;
    }
</style>

