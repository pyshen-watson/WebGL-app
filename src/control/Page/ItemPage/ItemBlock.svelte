<script lang="ts">
    import type { ItemRepo, ItemStore } from "$utils/Type"
    import ModelBlock from "./ModelBlock.svelte"
    import ShaderBlock from "./ShaderBlock.svelte"
    import MaterialBlock from "./MaterialBlock.svelte"

    export let repo: ItemRepo
    let store:ItemStore = repo.getStore()
</script>

<div>
    <ModelBlock {repo}/>
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