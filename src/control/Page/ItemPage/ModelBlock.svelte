<script lang="ts">
    import type { ItemRepo, ItemStore } from "$utils/Type"
    import { changeModel, ModelRepoList } from "$repo/ModelRepo"
    import Select from "$components/Select.svelte"

    export let repo: ItemRepo
    let store:ItemStore = repo.getStore()

    let options = Object.keys(ModelRepoList)
    options.push('Hide')

    let modelName:string = $store.modelName

    $:{
        if(modelName !== $store.modelName){
            changeModel(repo, modelName)
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