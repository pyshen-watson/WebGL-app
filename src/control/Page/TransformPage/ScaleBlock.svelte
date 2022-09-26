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
            $store.scaling.ratio[i] = allRatio
    }


    import { dirMap } from "$utils/Math"
    const dirChangeHandler = (e:CustomEvent) => {
        direction = dirMap[e.detail]
    }

    const scaleResetHandler = (e:CustomEvent) => {
        $store.scaling.ratio = [1,1,1]
        allRatio = 1
    }

</script>

<div>

    <Bar
        title="Scale"
        bind:value={$store.scaling.ratio[direction]}
        range={[0, 5, 0.1]}
        eventName="scaleRatioReset"
        on:scaleRatioReset={scaleResetHandler}
    />

    <Flex --align="end">
        {#each Object.keys(dirMap) as dir, i}
            <Label
                title={dir}
                bind:value={$store.scaling.ratio[i]}
                active={direction===i}
                step={0.1}
                eventName="ScaleDirChange"
                on:ScaleDirChange={dirChangeHandler}
            />
        {/each}
        <Label
            title="All"
            bind:value={allRatio}
            active={true}
            step={0.1}
        />
    </Flex>

</div>