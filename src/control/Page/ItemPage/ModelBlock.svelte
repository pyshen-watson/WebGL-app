<script lang="ts">
    import type { ItemStore } from "$utils/Type"
    import { changeModel, ModelStoreList } from "$store/ModelStore"
    import Select from "$components/Select.svelte"

    export let store: ItemStore

    let options = Object.keys(ModelStoreList)
    options.push('Hide')

    let modelName = $store.modelName

    $:{
        if(modelName !== $store.modelName){
            changeModel(store, modelName)
        }
    }
</script>

<div>
    <Select
        title="Model"
        bind:value={modelName}
        {options}
    />
</div>