<script lang="ts">
    export let title:string
    export let value:string
    export let options:string[]
</script>

<main>
    <span class="label">
        <div> {title} </div>
    </span>
    <span class="value">
        <select bind:value={value}>
            {#each options as option}
            <option value={option}>{option}</option>
            {/each}
        </select>
    </span>
</main>

<style lang="scss">

    main{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        span{
            padding: 0.3rem 0.7rem;
        }

        .label{
            background-color: gray;
            border-radius: 1rem 0 0 1rem;
            font-size: 1.1rem;
        }

        .value{
            display: flex;
            background-color: lightgray;
            border-radius: 0 1rem 1rem 0;

            select{
                font-size: 1.1rem;
                background: none;
                border: 0px;
                outline: 0px;
            }
        }

    }

</style>