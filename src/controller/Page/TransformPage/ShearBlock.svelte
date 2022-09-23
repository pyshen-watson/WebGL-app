<script lang="ts">
    import type { ItemStore } from "$utils/Type"
    import { dirMap } from "$utils/Math"

    import Flex from "$components/Flex.svelte"
    import Bar from "$components/Bar.svelte"
    import Label from "$components/Label.svelte"

    export let store:ItemStore

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

    <Flex --align="center" --gap="1rem">
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