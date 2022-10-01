<script lang="ts">
    import TabBar from "$components/TabBar.svelte"
    import TransformTabName from "./TransformTabName"
    import TranslateBlock from "./TransfromBlocks/TranslateBlock.svelte"
    import RotateBlock from "./TransfromBlocks/RotateBlock.svelte"
    import ScaleBlock from "./TransfromBlocks/ScaleBlock.svelte"
    import ShearBlock from "./TransfromBlocks/ShearBlock.svelte"
    import MotionBlock from "./TransfromBlocks/MotionBlock.svelte"
    import type { ItemStore } from "$utils/Type"

    export let store: ItemStore
    let nameActive = TransformTabName.Translate
</script>


<div class="main">

    <TabBar titleList={Object.values(TransformTabName)} bind:titleActive={nameActive}/>

    <div class="block">

        {#if nameActive === TransformTabName.Translate}
         <TranslateBlock {store}/>

        {:else if nameActive === TransformTabName.Rotate}
         <RotateBlock {store}/>

        {:else if nameActive === TransformTabName.Scale}
         <ScaleBlock {store}/>

        {:else if nameActive === TransformTabName.Shear}
         <ShearBlock {store}/>

        {:else if nameActive === TransformTabName.Motion}
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