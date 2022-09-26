<script lang="ts">
    import Flex from "$components/Flex.svelte"
    import Bar from "$components/Bar.svelte"
    import Label from "$components/Label.svelte"

    import type { ItemStore, ModelStore } from "$utils/Type";
    export let store: ItemStore
    let direction: number = $store.rotation.direction.indexOf(1)


    import { dirMap } from "$utils/Math"
    const directionChangeHandler = (e:CustomEvent) => {
        direction = dirMap[e.detail]
    }

    const autoChangeHandler = (e:CustomEvent) => {
        $store.rotation.auto = !$store.rotation.auto
    }

    import { ModelStoreList } from "$store/ModelStore";
    import deepcopy from "$utils/Deepcopy"
    let modelStore:ModelStore = ModelStoreList[$store.modelName]
    const degreeResetHandler = (e:CustomEvent) => {
        $store.rotation.degree = deepcopy($modelStore.rotationDegree)
        $store.rotation.auto = false
    }

    $:{
        $store.rotation.direction  = [0.0, 0.0, 0.0]
        $store.rotation.direction[direction]  = 1.0
    }

</script>

<div>
    <Bar
        title="Rotation"
        bind:value={$store.rotation.degree[direction]}
        range={[-360,360,1]}
        eventName="RotDegReset"
        on:RotDegReset={degreeResetHandler}
    />

    <Flex --align="end">

        {#each Object.keys(dirMap) as dir, i}
            <Label
                title={dir}
                bind:value={$store.rotation.degree[i]}
                active={$store.rotation.direction.indexOf(1)===i}
                eventName="RotDirChange"
                on:RotDirChange={directionChangeHandler}
            />
        {/each}

        <Label
            title="Speed"
            bind:value={$store.rotation.speed}
            eventName="autoChange"
            active={$store.rotation.auto}
            on:autoChange={autoChangeHandler}
            step={30}
        />

    </Flex>
</div>