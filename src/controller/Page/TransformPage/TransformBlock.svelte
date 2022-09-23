<script lang="ts">
    import type Store from "$class/Store"
    import type { Item } from "$store/ItemStore"

    import TranslateBlock from "./TranslateBlock.svelte"
    import RotateBlock from "./RotateBlock.svelte"
    import ScaleBlock from "./ScaleBlock.svelte"
    import ShearBlock from "./ShearBlock.svelte"

    export let itemStore: Store<Item>
</script>

<div>
    <TranslateBlock {itemStore}/>
    <RotateBlock {itemStore}/>
    <ScaleBlock {itemStore}/>
    <ShearBlock {itemStore}/>
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