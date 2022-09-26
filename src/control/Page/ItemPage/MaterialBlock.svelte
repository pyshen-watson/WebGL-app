<script lang="ts">
    import type { ItemStore } from "$utils/Type"
    import Bar from "$components/Bar.svelte"

    export let store:ItemStore
    let eventName = "resetMaterial"
    let displayValue = true

    const resetHandler = (e:CustomEvent) => {
        if(e.detail==='Ka')
            $store.material.Ka = 0.1
        else if(e.detail === 'Kd')
            $store.material.Kd = 0.1
        else if(e.detail === 'Ks')
            $store.material.Ks = 0.1
        else
            $store.material.Shininess = 1
        }

</script>

<div>
    <Bar title="Ka" bind:value={$store.material.Ka} range={[-0.5,1.5,0.1]} {displayValue} {eventName} on:resetMaterial={resetHandler}/>
    <Bar title="Kd" bind:value={$store.material.Kd} range={[-0.5,1.5,0.1]} {displayValue} {eventName} on:resetMaterial={resetHandler}/>
    <Bar title="Ks" bind:value={$store.material.Ks} range={[-0.5,1.5,0.1]} {displayValue} {eventName} on:resetMaterial={resetHandler}/>
    <Bar title="Sn" bind:value={$store.material.Shininess} range={[-1,5,0.1]} {displayValue} {eventName} on:resetMaterial={resetHandler}/>
</div>

<style>
    div{
        width: 90%;
        display: grid;
    }
</style>

