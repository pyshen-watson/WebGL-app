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
    let direction: number = 0
    let eventName:string = "TranDirChange"

    const dirChangeHandler = (e:CustomEvent) => {
        direction = dirMap[e.detail]
    }

</script>

<div>

    <Bar
        title="Translation"
        bind:value={$store.location[direction]}
        range={[-150, 150, 1]}
    />

    <Flex --align="center" --gap="1rem">
        {#each Object.keys(dirMap) as dir, i}
            <Label
                title={dir}
                bind:value={$store.location[i]}
                active={direction===i}
                eventName={eventName}
                on:TranDirChange={dirChangeHandler}
            />
        {/each}
    </Flex>

</div>

<style lang="scss">

</style>