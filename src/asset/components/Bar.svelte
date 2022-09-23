<script lang="ts">
    import type { Vec3 } from "$utils/Type"

    export let title: string
    export let value: number
    export let range: Vec3
    export let displayValue:boolean=false

    let min:number = range[0]
    let max:number = range[1]
    let step:number = range[2]
</script>

<main>

    <span class="title">
        {title}
    </span>

    {#if displayValue}
        <span class="bar">
            <div> {min} </div>
            <input type="range" bind:value={value} min={min} max={max} step={step}>
            <div> {max} </div>
        </span>

        <span class="value end">
            <input type="number" step={step} bind:value={value}>
        </span>
    {:else}
        <span class="bar end">
            <div> {min} </div>
            <input type="range" bind:value={value} min={min} max={max} step={step}>
            <div> {max} </div>
        </span>
    {/if}


</main>

<style lang="scss">

    main{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem 0rem;
        height: 1.5rem;

        span{
            padding: 0.3rem 0.7rem;
        }

        .title{
            background-color: var(--color, rgba(gray, 0.7));
            border-radius: 1rem 0 0 1rem;
            text-align: center;
            font-weight: 600;
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
            }
        }

        .end{
            border-radius: 0 1rem 1rem 0;
        }

    }

</style>