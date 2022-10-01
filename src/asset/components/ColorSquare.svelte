<script lang="ts">

    import {createEventDispatcher} from 'svelte'
    export let colorCode:string

    const dispatcher = createEventDispatcher()

    const clickHandler = () => {
        dispatcher("colorChange", colorCode)
    }
</script>

<button on:click={clickHandler}></button>

<style>
    button{
        background-color: var(--color);
        width: 1.75rem;
        height: 1.75rem;
        cursor: pointer;
    }
</style>