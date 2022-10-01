<script lang="ts">
    import TabBar from "$components/TabBar.svelte"
    import LightTabName from "./LightTabName"
    import LocationBlock from './LightBlocks/LocationBlock.svelte'
    import ColorBlock from './LightBlocks/ColorBlock.svelte'
    import EffectBlock from './LightBlocks/EffectBlock.svelte'
    import type { LightStore } from "$utils/Type"

    export let store: LightStore
    let nameActive = LightTabName.Color
</script>

<div class="main">

    <TabBar titleList={Object.keys(LightTabName)} bind:titleActive={nameActive}/>

    <div class="block">
        {#if nameActive === LightTabName.Color}
            <ColorBlock {store}/>

        {:else if nameActive === LightTabName.Location}
            <LocationBlock {store}/>

        {:else if nameActive === LightTabName.Effect}
            <EffectBlock {store}/>

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