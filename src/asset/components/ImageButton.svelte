<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let name:string
    export let src:string
    export let active:boolean
    export let func
    export let caption:string = ""

    const dispatcher = createEventDispatcher()
    const clickhandler = () => {
        dispatcher('buttonChange', name)
        func()
    }
</script>

<div class="main" class:active="{active}" on:click={clickhandler}>
    <img type="image" alt={name} src={src} />
    <div class="caption"> {caption} </div>
</div>

<style lang="scss">

    .main{

        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: end;

        cursor: pointer;
        filter: grayscale(100%);


        &:hover{
            border: 1px solid white;
            border-radius: 15px;
            filter: grayscale(0%);
        }

        img{
            width: 100%;
        }

        .caption{
            color:white;
            text-align: center;
        }

    }

    .active{
        filter: grayscale(0%);

        .caption{
            font-style: italic;
            text-decoration: underline;
        }
    }
</style>