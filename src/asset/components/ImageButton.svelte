<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let name:string
    export let src:string
    export let active:boolean
    export let func

    const dispatcher = createEventDispatcher()
    const clickhandler = () => {
        dispatcher('sceneChange', name)
        func()
    }
</script>

<input
    type="image"
    alt={name}
    src={src}
    class:active={active}
    on:click={clickhandler}
>

<style lang="scss">
    input{
        width: 100%;
        height: 100%;
        border-radius: 15px;
        filter: grayscale(100%);

        &:hover{
            filter: grayscale(0%);
        }
    }
    .active{
        filter: grayscale(0%);
    }
</style>