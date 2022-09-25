<script lang="ts">

    export let title:string
    export let value:boolean


    const clickHandler = () => {
        value = !value
    }
</script>

<button class:active={value} on:click={clickHandler}>
    {title}
</button>

<style lang="scss">

    button{
        border: 2px solid black;
        border-radius: 15px;
        height: fit-content;
        padding: 1rem 0.5rem;
        font-size: 100%;
        font-weight: 600;
        color: black;
        background-color: rgba(lightgray, 0.3);

        &:hover{
            color: blue;
            border-color: blue;
            background-color: rgba(lightgray, 0.3);
        }
    }

    .active{
        color: white;
        border: 2px solid white;
        background-color: rgba(blue, 0.05);
        &:hover{
            background-color: rgba(lightgray, 0.3);
        }
    }
</style>