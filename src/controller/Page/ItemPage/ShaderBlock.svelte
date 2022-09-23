<script lang="ts">
    import type { Item } from "$store/ItemStore"
    import type { Writable } from "svelte/store"
    import type Store from "$class/Store"
    import { ShaderStoreList } from "$store/ShaderStore"
    import Select from "$components/Select.svelte"

    export let itemStore:Store<Item>

    let store: Writable<Item> = itemStore.store
    let options = Object.keys(ShaderStoreList)


</script>

<div>
    <Select
        title="Shader"
        bind:value={$store.shaderName}
        options={Object.keys(ShaderStoreList)}
    />
</div>

<style lang="scss">

</style>