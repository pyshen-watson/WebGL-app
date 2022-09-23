<script lang="ts">
    import type { Item } from "$store/ItemStore"
    import type { Writable } from "svelte/store"
    import type Store from "$class/Store"
    import { dirMap } from "$utils/Math"

    import Flex from "$components/Flex.svelte"
    import Bar from "$components/Bar.svelte"
    import Label from "$components/Label.svelte"

    export let itemStore:Store<Item>

    let store: Writable<Item> = itemStore.store
    let direction: number = $store.shearing_direction.indexOf(1)
    let eventName:string = "ShearDirChange"

    const dirChangeHandler = (e:CustomEvent) => {
        direction = dirMap[e.detail]
    }

</script>

<div>

    <Bar
        title="Shear"
        bind:value={$store.shearing_degree[direction]}
        range={[-90, 90, 1]}
    />

    <Flex --align="end" --gap="0.5em">
        {#each Object.keys(dirMap) as dir, i}
            <Label
                title={dir}
                bind:value={$store.shearing_degree[i]}
                active={direction===i}
                eventName={eventName}
                on:ShearDirChange={dirChangeHandler}
            />
        {/each}
    </Flex>

</div>

<style lang="scss">

</style>