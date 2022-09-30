<script lang="ts">
    import TabBar from "$components/TabBar.svelte"
    import ItemTabName from "./ItemTabName"
    import ModelBlock from "./ItemBlocks/ModelBlock.svelte"
    import ShaderBlock from "./ItemBlocks/ShaderBlock.svelte"
    import MaterialBlock from "./ItemBlocks/MaterialBlock.svelte"

    import type { Writable } from "svelte/store"
    import type Item from "$class/Item/Item"

    export let store: Writable<Item>
    let nameActive = ItemTabName.Model

</script>

<div class="main">

    <TabBar nameList={Object.keys(ItemTabName)} bind:nameActive={nameActive}/>

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