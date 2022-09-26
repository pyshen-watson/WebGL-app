<script lang="ts">
    import MotionBlock from './MotionBlock.svelte'
    import { ItemStoreList } from '$store/ItemStore'
    import { LightStoreList } from '$store/LightStore'
</script>

<div>
    {#each Array(3) as _,i}
        <MotionBlock
            itemStore={ItemStoreList[i]}
            lightStore={LightStoreList[i]}
        />
    {/each}
</div>

<style lang="scss">
    div{
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 1rem;
    }
</style>