<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<script lang="ts">
    let menuOpen:boolean = false

    const toggleMenu = () => {
        menuOpen = !menuOpen
    }
</script>

<div class="main" class:opened={menuOpen} >

    <button on:click={toggleMenu} >
        {#if menuOpen}
            <i class="fa fa-close"/>
        {:else}
            <i class="fa fa-bars"/>
        {/if}
    </button>

    <div class="panel">
    </div>

</div>

<style lang="scss">
    .main{
        width: 100vw;
        height: 100vh;
        position:absolute;
        left:0;
        top:0;

        button{
            color: white;
            background-color: lightgray;
            border: none;
            padding: 1rem 1.2rem;
            font-size: 1.5rem;
            cursor: pointer;
        }

        .panel{
            visibility: hidden;
            width: 100%;
            height: 100%
        }

    }

    .opened{
        background-color: rgba(0,0,0,0.4);

        .panel{
            visibility: visible;
        }

        button{
            background-color: darkgray;
        }
    }

</style>