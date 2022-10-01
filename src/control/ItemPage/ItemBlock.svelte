<script lang="ts">
    import TabBar from "$components/TabBar.svelte"
    import ModelBlock from "./ItemBlocks/ModelBlock.svelte"
    import ShaderBlock from "./ItemBlocks/ShaderBlock.svelte"
    import MaterialBlock from "./ItemBlocks/MaterialBlock.svelte"

    import ItemTabName from "./ItemTabName"
    import type { ItemStore } from "$utils/Type"

    export let store: ItemStore
    let nameActive = ItemTabName.Model

</script>

<div class="main">

    <TabBar titleList={Object.keys(ItemTabName)} bind:titleActive={nameActive}/>

    <div class="block">
        {#if nameActive === ItemTabName.Model}
            <ModelBlock {store}/>

        {:else if nameActive === ItemTabName.Shader}
            <ShaderBlock {store}/>

        {:else if nameActive === ItemTabName.Material}
            <MaterialBlock {store}/>

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