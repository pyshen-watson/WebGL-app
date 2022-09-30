<script lang="ts">
    import ModelName from "$class/Model/ModelName"
    import ImageButton from "$components/ImageButton.svelte"

    import type { Writable } from "svelte/store"
    import type Item from "$class/Item/Item"

    export let store: Writable<Item>
</script>

<div class="main">

    {#each Object.values(ModelName) as name}
        <ImageButton
            name={name}
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