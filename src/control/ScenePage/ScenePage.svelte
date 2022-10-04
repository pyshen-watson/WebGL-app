<script lang="ts">
    import ImageButton from '$components/ImageButton.svelte'
    import { SceneImages } from '$image/ImageExport'
    import Disco from '$scene/Disco'
    import Boxing from '$scene/Boxing'
    import Watering from '$scene/Watering'
    import Driving from '$scene/Driving'
    import Wall from '$scene/Wall'

    export let menuOpen:Boolean

    let sceneList = [ Boxing, Disco, Watering, Driving, Wall ]
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
            src={SceneImages[scene.name]}
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

        background-color: rgba(gray, 0.7);
        margin: 3rem;
        padding: 3rem 1.5rem;
        border-radius: 20px;
    }
</style>