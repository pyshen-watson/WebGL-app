<script lang="ts">
    import ShaderName from "$shader/ShaderName"
    import ImageButton from "$components/ImageButton.svelte"
    import { ShaderImages } from "$image/images"
    import type { Writable } from "svelte/store"
    import type Item from "src/lib/item/Item"

    export let store: Writable<Item>
</script>

<div class="main">

    {#each Object.values(ShaderName) as name}
        <ImageButton
            title={name}
            src={ShaderImages[name]}
            active={name == $store.shaderName}
            func={() => {$store.shaderName = name}}
            caption={name}
        />
    {/each}

</div>

<style lang="scss">
    .main{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem 1rem;
    }
</style>