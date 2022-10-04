<script lang="ts">
    import TabBar from "$components/TabBar.svelte"
    import InfoTabName from "./InfoTabName"
    import ModelInfoBlock from "./InfoBlocks/ModelInfoBlock.svelte"
    import ShaderInfoBlock from "./InfoBlocks/ShaderInfoBlock.svelte"
    import MaterialInfoBlock from "./InfoBlocks/MaterialInfoBlock.svelte"
    import TransformInfoBlock from "./InfoBlocks/TransformInfoBlock.svelte"
    import MotionInfoBlock from "./InfoBlocks/MotionInfoBlock.svelte"
    import LightInfoBlock from "./InfoBlocks/LightInfoBlock.svelte"
    import EffectInfoBlock from "./InfoBlocks/EffectInfoBlock.svelte"
    import SceneInfoBlock from "./InfoBlocks/SceneInfoBlock.svelte"

    let titleActive = InfoTabName.Model

</script>

<div class="main">

    <TabBar titleList={Object.values(InfoTabName)} bind:titleActive={titleActive}/>

    <div class="infoblock">

        {#if titleActive === InfoTabName.Model}
            <ModelInfoBlock/>

        {:else if titleActive === InfoTabName.Shader}
            <ShaderInfoBlock/>

        {:else if titleActive === InfoTabName.Material}
            <MaterialInfoBlock/>

        {:else if titleActive === InfoTabName.Transform}
            <TransformInfoBlock/>

        {:else if titleActive === InfoTabName.Motion}
            <MotionInfoBlock/>

        {:else if titleActive === InfoTabName.Light}
            <LightInfoBlock/>

        {:else if titleActive === InfoTabName.Effect}
            <EffectInfoBlock/>

        {:else if titleActive === InfoTabName.Scene}
            <SceneInfoBlock/>

        {/if}
    </div>
</div>

<style lang="scss">

    .main{

        height: 100%;

        .infoblock{
            margin: 3rem;
            padding: 2rem;
            min-height: 35%;
            max-height: 35%;
            overflow-y: scroll;
            border-radius: 20px;
            background-color: rgba(gray, 0.7);

            &::-webkit-scrollbar{
                visibility: hidden;
            }
        }
    }


</style>