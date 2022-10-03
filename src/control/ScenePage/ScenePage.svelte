<script lang="ts">
    import ImageButton from '$components/ImageButton.svelte'
    import Disco from '$utils/Scenes/Disco'
    import Boxing from '$utils/Scenes/Boxing'
    import Watering from '$utils/Scenes/Watering'

    // import Watering from './Scenes/Watering'
    // import Driving from './Scenes/Driving'

    export let menuOpen:Boolean

    let sceneList = [ Boxing, Disco, Watering ]
    let sceneName = ""

    const sceneChangeHandler = (e:CustomEvent) => {
        sceneName = e.detail
        menuOpen = false
    }
</script>

<div class="main">
    {#each sceneList as scene}
        <ImageButton
            title={scene.name}
            src={scene.src}
            active={sceneName === scene.name}
            func={scene.func}
            on:buttonChange={sceneChangeHandler}
        />
    {/each}

</div>

<style lang="scss">
    .main{
        display: grid;
        box-sizing: border-box;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem 1rem;
    }
</style>