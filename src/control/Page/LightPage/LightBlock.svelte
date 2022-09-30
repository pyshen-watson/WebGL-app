<script lang="ts">
    import TabBar from "$components/TabBar.svelte"
    import LightTabName from "./LightTabName"

    import LocationBlock from './LightBlocks/LocationBlock.svelte'
    import ColorBlock from './LightBlocks/ColorBlock.svelte'
    import MotionBlock from './LightBlocks/MotionBlock.svelte'

    import type { Writable } from "svelte/store"
    import type Light from "$class/Light/Light"

    export let store: Writable<Light>
    let nameActive = LightTabName.Color
</script>

<div class="main">

    <TabBar nameList={Object.keys(LightTabName)} bind:nameActive={nameActive}/>

    <div class="block">
        {#if nameActive === LightTabName.Color}
            <ColorBlock {store}/>

        {:else if nameActive === LightTabName.Location}
            <LocationBlock {store}/>

        {:else if nameActive === LightTabName.Motion}
            <MotionBlock {store}/>

        {/if}
    </div>

</div>

<style lang="scss">
    .main{
        width: 100%;
        border-right: 2px solid rgba(gray, 0.3);

        .block{
            padding: 4rem 2rem 2rem 2rem;
        }
    }
</style>