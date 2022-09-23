<script lang="ts">
    import type Store from "$class/Store"
    import type { Light } from "$store/LightStore"

    import LocationBlock from './LocationBlock.svelte'
    import RgbBlock from './RGBBlock.svelte'
    import SelectionBlock from "./SelectionBlock.svelte"

    export let lightStore: Store<Light>
</script>

<div>
    <LocationBlock {lightStore}/>
    <RgbBlock {lightStore}/>
    <SelectionBlock {lightStore}/>
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