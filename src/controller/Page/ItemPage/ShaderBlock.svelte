<script lang="ts">
    import type { ItemStore } from "$utils/Type"
    import { ShaderRepoList } from "$repo/ShaderRepo"
    import Select from "$components/Select.svelte"

    export let store: ItemStore
</script>

<div>
    <Select
        title="Shader"
        bind:value={$store.shaderName}
        options={Object.keys(ShaderRepoList)}
    />
</div>