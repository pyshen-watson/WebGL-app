<script lang="ts">
    import TabBar from '$components/TabBar.svelte'
    import PageTabName from './PageTabName'

    import ItemPage from './ItemPage/ItemPage.svelte'
    import TransformPage from './TransformPage/TransformPage.svelte'
    import LightPage from './LightPage/LightPage.svelte'
    import ScenePage from './ScenePage/ScenePage.svelte'
    import InfoPage from './InfoPage/InfoPage.svelte'
    import AboutPage from './AboutPage/AboutPage.svelte'

    let menuOpen:boolean = false
    let nameActive: PageTabName

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

        <TabBar bind:titleActive={nameActive} titleList={Object.values(PageTabName)} />

        {#if nameActive === PageTabName.Item}
            <ItemPage/>

        {:else if nameActive === PageTabName.Transform}
            <TransformPage/>

        {:else if nameActive === PageTabName.Light}
            <LightPage/>

        {:else if nameActive === PageTabName.Scene}
            <ScenePage bind:menuOpen={menuOpen}/>

        {:else if nameActive === PageTabName.Info}
            <InfoPage/>

        {:else if nameActive === PageTabName.About}
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
            height: 7.5vh;
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