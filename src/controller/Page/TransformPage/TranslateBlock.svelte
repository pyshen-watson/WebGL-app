<script lang="ts">
    import type { ItemStore } from "$utils/Type"
    import { dirMap } from "$utils/Math"

    import Flex from "$components/Flex.svelte"
    import Bar from "$components/Bar.svelte"
    import Label from "$components/Label.svelte"

    export let store: ItemStore

    let direction: number = 0
    let eventName: string = "TranDirChange"

    const dirChangeHandler = (e:CustomEvent) => {
        direction = dirMap[e.detail]
    }

</script>

<div>

    <Bar
        title="Translation"
        bind:value={$store.location_shift[direction]}
        range={[-150, 150, 1]}
    />

    <Flex --align="center" --gap="1rem">
        {#each Object.keys(dirMap) as dir, i}
            <Label
                title={dir}
                bind:value={$store.location_shift[i]}
                active={direction===i}
                eventName={eventName}
                on:TranDirChange={dirChangeHandler}
            />
        {/each}
    </Flex>

</div>