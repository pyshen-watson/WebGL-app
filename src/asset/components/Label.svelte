<script lang="ts">
    import {createEventDispatcher} from 'svelte'

    export let title:string
    export let step:number=1
    export let eventName:string=""
    export let value:any=null
    export let active:boolean=false

    const dispatcher = createEventDispatcher()

    const clickHandler = () => {
        if(eventName !== "")
            dispatcher(eventName, title)
    }
</script>

<div class:active={active}>
    <span class="label" on:click={clickHandler}>
        {title}
    </span>
    <span class="value">
        <input type="number" step={step} bind:value={value}>
    </span>
</div>

<style lang="scss">

    div{

        display: flex;
        justify-content: center;
        align-items: center;
        border: 0px;

        .label{
            background-color: rgba(gray, 0.5);
            padding: 0.5rem 0.5rem;
            border-radius: 1rem 0 0 1rem;
            cursor: pointer;

            &:hover{
                font-weight: 700;
                color: white;
                background-color: rgba(blue, 0.5);
            }
        }

        .value{
            background-color: rgba(lightgray, 0.5);
            padding: 0.5rem;
            border-radius: 0 1rem 1rem 0;


            input{
                background: none;
                width: 2.2rem;
                border: 0px;
                outline: 0px;
            }
        }

    }

    .active{
        .label{
            background-color:rgba(blue, 0.5);
            color: rgba(white, 0.5);
        }
        .value{
            background-color: rgba(lightblue, 0.5);

        }
    }

</style>