<script lang="ts">
    import type Store from "$class/Store"
    import type { Light } from "$store/LightStore"

    import LocationBlock from './LocationBlock.svelte'
    import RGBBlock from './RGBBlock.svelte'

    export let lightStore: Store<Light>
</script>

<div>
    <LocationBlock {lightStore}/>
    <RGBBlock {lightStore}/>
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