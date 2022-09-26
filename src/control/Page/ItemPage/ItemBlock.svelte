<script lang="ts">
    import type { ItemStore } from "$utils/Type"
    import ModelBlock from "./ModelBlock.svelte"
    import ShaderBlock from "./ShaderBlock.svelte"
    import MaterialBlock from "./MaterialBlock.svelte"
    export let store: ItemStore
</script>

<div>
    <ModelBlock {store}/>
    <ShaderBlock {store}/>
    <MaterialBlock {store}/>
</div>

<style lang="scss">
    div{
        box-sizing: border-box;
        width: 100%;
        height: 70%;
        padding: 1rem;
        border-right: 2px solid rgba(gray, 0.3);

        display: grid;
    }

</style>