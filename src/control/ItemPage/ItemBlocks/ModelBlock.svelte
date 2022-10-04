<script lang="ts">
    import ImageButton from "$components/ImageButton.svelte"
    import Switch from "$components/Switch.svelte"
    import ModelName from "$model/ModelName"
    import { ModelImages } from "$image/images"
    import type { ItemStore } from "$utils/Type"

    export let store: ItemStore
    let hidden:boolean

    $:{
        if(hidden){
            $store.changeModel()
            hidden = false
        }
    }

</script>

<div class="main">

    <div class="grid">

        {#each Object.values(ModelName) as name}
            <ImageButton
                title={name}
                src={ModelImages[name]}
                active={name == $store.modelName}
                func={() => {$store.changeModel(name); $store=$store}}
                caption={name}
            />
        {/each}

    </div>

    <div class="button">
        <Switch
            title="Hide Model"
            bind:value={hidden}
        />
    </div>

</div>

<style lang="scss">
    .main{
        .grid{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem 1rem;
        }

        .button{
            margin-top: 1rem;
            display: flex;
            justify-content: center;
        }
    }
</style>