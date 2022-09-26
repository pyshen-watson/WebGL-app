<script lang="ts">
    import Flex from "$components/Flex.svelte"
    import Bar from "$components/Bar.svelte"
    import Label from "$components/Label.svelte"

    import type { ItemStore, ModelStore } from "$utils/Type"
    export let store: ItemStore
    let direction: number = 0


    import { dirMap } from "$utils/Math"
    const dirChangeHandler = (e:CustomEvent) => {
        direction = dirMap[e.detail]
    }

    import { ModelStoreList } from "$store/ModelStore"
    import deepcopy from "$utils/Deepcopy"
    let modelStore:ModelStore = ModelStoreList[$store.modelName]
    const shiftResetHander = (e:CustomEvent) => {
        $store.location.shift = deepcopy($modelStore.locationShift)
    }
</script>

<div>

    <Bar
        title="Translation"
        bind:value={$store.location.shift[direction]}
        range={[-150, 150, 1]}
        eventName="TranShiftReset"
        on:TranShiftReset={shiftResetHander}
    />

    <Flex --align="end">
        {#each Object.keys(dirMap) as dir, i}
            <Label
                title={dir}
                bind:value={$store.location.shift[i]}
                active={direction===i}
                eventName="TranDirChange"
                on:TranDirChange={dirChangeHandler}
            />
        {/each}
    </Flex>

</div>