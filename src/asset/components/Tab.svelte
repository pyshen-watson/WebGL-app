<script lang="ts">
    import { createEventDispatcher }from 'svelte'

    export let title:string
    export let active:boolean

    const dispatcher = createEventDispatcher()
    const tabClickHandler = () => {
        dispatcher('tabClick', title)
    }

</script>

<div on:click={tabClickHandler} class:active={active}>
    {title}
</div>

<style lang="scss">
    div{
        color: white;
        text-align: center;
        width: 100%;
        height: 7.5vh;
        line-height: 7.5vh;
        cursor: pointer;
        &:hover{
            font-weight: 700;
            text-decoration: underline;
        }
    }

    .active{
        color: black;
        background-color: white;
    }
</style>