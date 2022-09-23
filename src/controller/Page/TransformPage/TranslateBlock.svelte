<script lang="ts">
    import Flex from "$components/Flex.svelte"
    import Bar from "$components/Bar.svelte"
    import Label from "$components/Label.svelte"

    import type { ItemStore } from "$utils/Type"
    export let store: ItemStore
    let direction: number = 0


    import { dirMap } from "$utils/Math"
    const dirChangeHandler = (e:CustomEvent) => {
        direction = dirMap[e.detail]
    }

    import { ModelRepoList } from "$repo/ModelRepo"
    import deepcopy from "$utils/Deepcopy"
    const shiftResetHander = (e:CustomEvent) => {
        $store.location_shift = deepcopy(ModelRepoList[$store.modelName].get('locationShift'))
    }
</script>

<div>

    <Bar
        title="Translation"
        bind:value={$store.location_shift[direction]}
        range={[-150, 150, 1]}
        eventName="TranShiftReset"
        on:TranShiftReset={shiftResetHander}
    />

    <Flex --align="center" --gap="1rem">
        {#each Object.keys(dirMap) as dir, i}
            <Label
                title={dir}
                bind:value={$store.location_shift[i]}
                active={direction===i}
                eventName="TranDirChange"
                on:TranDirChange={dirChangeHandler}
            />
        {/each}
    </Flex>

</div>