<script lang="ts">
    import type { LightStore } from "$utils/Type";
    import LocationBlock from './LocationBlock.svelte'
    import ColorBlock from './ColorBlock.svelte'
    import SelectionBlock from "./SelectionBlock.svelte"

    export let store: LightStore
</script>

<div>
    <LocationBlock {store}/>
    <ColorBlock {store}/>
    <SelectionBlock {store}/>
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