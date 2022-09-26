<script lang="ts">
    import type { ItemStore } from "$utils/Type";

    import TranslateBlock from "./TranslateBlock.svelte"
    import RotateBlock from "./RotateBlock.svelte"
    import ScaleBlock from "./ScaleBlock.svelte"
    import ShearBlock from "./ShearBlock.svelte"

    export let store: ItemStore
</script>


<div>
    <TranslateBlock {store}/>
    <RotateBlock {store}/>
    <ScaleBlock {store}/>
    <ShearBlock {store}/>
</div>

<style lang="scss">
    div{
        box-sizing: border-box;
        width: 100%;
        height: 70%;
        padding: 1rem;
        border-right: 2px solid rgba(gray, 0.3);

        display: grid;
        row-gap: 1rem;
    }

</style>