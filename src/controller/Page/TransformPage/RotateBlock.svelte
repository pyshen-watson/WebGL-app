<script lang="ts">
    import type { ItemStore } from "$utils/Type";
    import { dirMap } from "$utils/Math"

    import Flex from "$components/Flex.svelte"
    import Bar from "$components/Bar.svelte"
    import Label from "$components/Label.svelte"

    export let store: ItemStore

    let direction: number = $store.rotation_direction.indexOf(1)
    let eventName: string = "RotDirChange"

    const directionChangeHandler = (e:CustomEvent) => {
        direction = dirMap[e.detail]
    }

    const autoChangeHandler = (e:CustomEvent) => {
        $store.rotation_auto = !$store.rotation_auto
    }

    $:{
        $store.rotation_direction  = [0.0, 0.0, 0.0]
        $store.rotation_direction[direction]  = 1.0
    }

</script>

<div>
    <Bar
        title="Rotation"
        bind:value={$store.rotation_degree[direction]}
        range={[-360,360,1]}
    />

    <Flex --align="center" --gap="1rem">

        {#each Object.keys(dirMap) as dir, i}
            <Label
                title={dir}
                bind:value={$store.rotation_degree[i]}
                active={$store.rotation_direction.indexOf(1)===i}
                eventName={eventName}
                on:RotDirChange={directionChangeHandler}
            />
        {/each}

        <Label
            title="Speed"
            bind:value={$store.rotation_speed}
            eventName="autoChange"
            active={$store.rotation_auto}
            on:autoChange={autoChangeHandler}
            step={30}
        />

    </Flex>
</div>