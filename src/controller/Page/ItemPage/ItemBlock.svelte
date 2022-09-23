<script lang="ts">
    import type Store from "$class/Store"
    import type { Item } from "$store/ItemStore"
    import Flex from "$components/Flex.svelte"

    import ModelBlock from "./ModelBlock.svelte"
    import ShaderBlock from "./ShaderBlock.svelte"
    import TranslateBlock from "./TranslateBlock.svelte"
    import RotateBlock from "./RotateBlock.svelte"

    export let itemStore: Store<Item>
</script>

<div>
    <Flex --gap="0.5rem">
        <ModelBlock {itemStore}/>
        <ShaderBlock {itemStore}/>
    </Flex>
    <TranslateBlock {itemStore}/>
    <RotateBlock {itemStore}/>
</div>

<style lang="scss">
    div{
        box-sizing: border-box;
        width: 100%;
        height: 70%;
        padding: 1rem;
        border-right: 2px solid rgba(gray, 0.3);
    }

</style>