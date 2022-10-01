<script lang="ts">
    import ImageButton from "$components/ImageButton.svelte"
    import ModelName from "$model/ModelName"
    import type { ItemStore } from "$utils/Type"

    export let store: ItemStore
</script>

<div class="main">

    {#each Object.values(ModelName) as name}
        <ImageButton
            title={name}
            src={`src/asset/image/model/${name}.png`}
            active={name == $store.modelName}
            func={() => {$store.changeModel(name); $store=$store}}
            caption={name}
        />
    {/each}

</div>

<style lang="scss">
    .main{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem 1rem;
    }
</style>