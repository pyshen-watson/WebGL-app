<script lang="ts">
    import type { ItemStore } from "$utils/Type"
    import { ShaderStoreList } from "$store/ShaderStore"
    import Select from "$components/Select.svelte"

    export let store: ItemStore
</script>

<div>
    <Select
        title="Shader"
        bind:value={$store.shaderName}
        options={Object.keys(ShaderStoreList)}
    />
</div>