<script lang="ts">
    import ImageButton from '$components/ImageButton.svelte'
    import Disco from './Disco'
    import Boxing from './Boxing'
    import Watering from './Watering'

    let sceneList = [Disco, Boxing, Watering]
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
            on:sceneChange={sceneChangeHandler}
        />
    {/each}

</div>

<style lang="scss">
    .main{
        display: grid;
        box-sizing: border-box;
        padding: 1rem;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem 1rem;
    }
</style>