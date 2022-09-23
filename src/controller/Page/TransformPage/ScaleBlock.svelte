<script lang="ts">
    import Flex from "$components/Flex.svelte"
    import Bar from "$components/Bar.svelte"
    import Label from "$components/Label.svelte"


    import type { ItemStore } from "$utils/Type"
    export let store: ItemStore
    let direction: number = 0

    let allRatio:number = 1
    $:{
        for(let i=0; i<3; i++)
            $store.scaling_ratio[i] = allRatio
    }


    import { dirMap } from "$utils/Math"
    const dirChangeHandler = (e:CustomEvent) => {
        direction = dirMap[e.detail]
    }

    const scaleResetHandler = (e:CustomEvent) => {
        $store.scaling_ratio = [1,1,1]
        allRatio = 1
    }

</script>

<div>

    <Bar
        title="Scale"
        bind:value={$store.scaling_ratio[direction]}
        range={[0, 5, 0.1]}
        eventName="scaleRatioReset"
        on:scaleRatioReset={scaleResetHandler}
    />

    <Flex --align="center" --gap="1rem">
        {#each Object.keys(dirMap) as dir, i}
            <Label
                title={dir}
                bind:value={$store.scaling_ratio[i]}
                active={direction===i}
                eventName="ScaleDirChange"
                on:ScaleDirChange={dirChangeHandler}
            />
        {/each}
        <Label
            title="All"
            bind:value={allRatio}
            active={true}
        />
    </Flex>

</div>