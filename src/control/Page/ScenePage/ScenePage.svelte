<script lang="ts">
    import ImageButton from '$components/ImageButton.svelte'
    // import Disco from './Scenes/Disco'
    // import Boxing from './Scenes/Boxing'
    // import Watering from './Scenes/Watering'
    // import Driving from './Scenes/Driving'

    // let sceneList = [Disco, Boxing, Watering, Driving]
    let sceneList = []
    let sceneName = ""

    const sceneChangeHandler = (e:CustomEvent) => {
        sceneName = e.detail
    }
</script>

<div class="main">
    {#each sceneList as scene}
        <ImageButton
            name={scene.name}
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