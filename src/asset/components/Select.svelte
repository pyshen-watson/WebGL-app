<script lang="ts">
    export let title:string
    export let value:string
    export let options:string[]
</script>

<div>
    <span class="label">
        <span> {title} </span>
    </span>
    <span class="value">
        <select bind:value={value}>
            {#each options as option}
            <option value={option}>{option}</option>
            {/each}
        </select>
    </span>
</div>

<style lang="scss">

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;


        span{
            padding: 0.3rem 0.7rem;
        }

        .label{
            background-color: rgba(gray, 0.7);
            border-radius: 1rem 0 0 1rem;
            font-size: 1.6rem;
            font-weight: 700;
        }

        .value{
            display: flex;
            background-color: rgba(lightgray, 0.7);
            border-radius: 0 1rem 1rem 0;

            select{
                font-size: 1.5rem;
                background: none;
                border: 0px;
                outline: 0px;
            }
        }

    }

</style>