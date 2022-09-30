<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let title: string
    export let value: number
    export let range: number[]
    export let displayValue:boolean=true
    export let eventName:string = ""

    let min:number = range[0]
    let max:number = range[1]
    let step:number = range[2]

    const dispatcher = createEventDispatcher()
    const clickHandler = () => {
        dispatcher(eventName, title)
    }

</script>

<div class="main">

    <span class="title"  on:click={clickHandler}>
        {title}<i class="fa fa-refresh" aria-hidden="true"/>
    </span>

    <span class="bar" class:end={!displayValue}>
        {min}
        <input type="range" bind:value={value} min={min} max={max} step={step}>
        {max}
    </span>

    {#if displayValue}
    <span class="value end">
        <input type="number" step={step} bind:value={value}>
    </span>
    {/if}

</div>

<style lang="scss">

    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem 0rem;

        span{
            padding: 0.3rem 0.7rem;
        }

        .title{
            background-color: var(--color, rgba(gray, 0.7));
            border-radius: 1rem 0 0 1rem;
            text-align: center;
            font-weight: 600;
            display: flex;
            cursor: pointer;

            i{
                margin-left: 0.5rem;
            }

            &:hover{
                color: white;
                i{
                    color: white;
                    font-weight: 800;
                }
            }
        }

        .bar{
            display: flex;
            background-color: rgba(lightgray, 0.7);
            width: 100%;

            input{
                width: 100%;
                margin: 0 1rem;
            }
        }

        .value{
            display: flex;
            background-color: var(--color,rgba(gray, 0.7));

            input{
                width: 2.6rem;
                background: none;
                border: 0px;
                outline: none;
                margin: 0.15rem 0rem;
                color: rgba(black, 0.8);
                font-weight: 700;
            }
        }

        .end{
            border-radius: 0 1rem 1rem 0;
        }



    }

</style>