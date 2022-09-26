<script lang="ts">
    import Navbar from './Navbar/Navbar.svelte'
    import ItemPage from './Page/ItemPage/ItemPage.svelte'
    import TransformPage from './Page/TransformPage/TransformPage.svelte'
    import LightPage from './Page/LightPage/LightPage.svelte'
    import MotionPage from './Page/MotionPage/MotionPage.svelte'
    import ScenePage from './Page/ScenePage/ScenePage.svelte'
    import InfoPage from './Page/InfoPage/InfoPage.svelte'
    import AboutPage from './Page/AboutPage/AboutPage.svelte'

    let menuOpen:boolean = true

    let selectID:number = 3

    const tabClickHandler = (e:CustomEvent) => {
        selectID = e.detail
    }

</script>

<div class="main" class:opened={menuOpen} >

    <button on:click={() => { menuOpen = !menuOpen }} >
        {#if menuOpen}
            <i class="fa fa-close"/>
        {:else}
            <i class="fa fa-bars"/>
        {/if}
    </button>

    <div class="panel">
        <Navbar {selectID} on:tabClick={tabClickHandler}/>
        {#if selectID === 0}
            <ItemPage/>
        {:else if selectID === 1}
            <TransformPage/>
        {:else if selectID === 2}
            <LightPage/>
        {:else if selectID === 3}
            <MotionPage/>
        {:else if selectID === 4}
            <ScenePage/>
        {:else if selectID === 5}
            <InfoPage/>
        {:else if selectID === 6}
            <AboutPage/>
        {/if}
    </div>

</div>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

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
            width: 100%;
            padding: 0.7rem 0rem;
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
        background-color: rgba(0,0,0,0.2);

        .panel{
            visibility: visible;
        }

        button{
            background-color: darkgray;
        }
    }

</style>