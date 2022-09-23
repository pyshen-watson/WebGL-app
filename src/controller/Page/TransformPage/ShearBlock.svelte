<script lang="ts">
    import Flex from "$components/Flex.svelte"
    import Bar from "$components/Bar.svelte"
    import Label from "$components/Label.svelte"

    import type { ItemStore } from "$utils/Type"
    export let store:ItemStore
    let direction: number = 0


    import { dirMap } from "$utils/Math"
    const dirChangeHandler = (e:CustomEvent) => {
        direction = dirMap[e.detail]
    }

    const degreeResetHandler = (e:CustomEvent) => {
        $store.shearing_degree = [0,0,0]
    }
</script>

<div>

    <Bar
        title="Shear"
        bind:value={$store.shearing_degree[direction]}
        range={[-90, 90, 1]}
        eventName="ShearDegReset"
        on:ShearDegReset={degreeResetHandler}
    />

    <Flex --align="center" --gap="1rem">
        {#each Object.keys(dirMap) as dir, i}
            <Label
                title={dir}
                bind:value={$store.shearing_degree[i]}
                active={direction===i}
                eventName="ShearDirChange"
                on:ShearDirChange={dirChangeHandler}
            />
        {/each}
    </Flex>

</div>