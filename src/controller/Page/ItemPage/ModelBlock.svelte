<script lang="ts">
    import type { Item } from "$store/ItemStore"
    import type Store from "$class/Store";
    import Select from "$components/Select.svelte"
    import { changeModel, ModelStoreList } from "$store/ModelStore"

    export let itemStore:Store<Item>

    let options = Object.keys(ModelStoreList)
    options.push('Hide')

    let modelName:string = itemStore.get('modelName')
    $:{
        if(modelName !== itemStore.get('modelName')){
            changeModel(itemStore, modelName)
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

<style lang="scss">

</style>