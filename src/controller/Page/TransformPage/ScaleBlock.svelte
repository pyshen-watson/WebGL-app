<script lang="ts">
    import type { ItemStore } from "$utils/Type"
    import { dirMap } from "$utils/Math"

    import Flex from "$components/Flex.svelte"
    import Bar from "$components/Bar.svelte"
    import Label from "$components/Label.svelte"

    export let store: ItemStore

    let direction: number = 0
    let eventName:string = "ScaleDirChange"

    const dirChangeHandler = (e:CustomEvent) => {
        direction = dirMap[e.detail]
    }

</script>

<div>

    <Bar
        title="Scale"
        bind:value={$store.scaling_ratio[direction]}
        range={[0, 5, 0.1]}
    />

    <Flex --align="center" --gap="1rem">
        {#each Object.keys(dirMap) as dir, i}
            <Label
                title={dir}
                bind:value={$store.scaling_ratio[i]}
                active={direction===i}
                eventName={eventName}
                on:ScaleDirChange={dirChangeHandler}
            />
        {/each}
    </Flex>

</div>