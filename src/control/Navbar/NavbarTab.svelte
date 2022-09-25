<script lang="ts">

    export let title:string
    export let active:boolean
    export let id:number
    export let dispatcher:any

    const tabClickHandler = () => {
        dispatcher('tabClick', id)
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
        padding: 0.7rem 0rem;
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