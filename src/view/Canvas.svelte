<script lang="ts">
    import { onMount } from 'svelte'

    import CanvasDB from '$class/Canvas/CanvasDB'
    import ModelDB from '$class/Model/ModelDB'
    import ShaderDB from '$class/Shader/ShaderDB'
    import LightDB from '$class/Light/LightDB'
    import ItemDB from '$class/Item/ItemDB'
    import nextFrame from './nextFrame'

    let canvas:HTMLCanvasElement

    onMount(() => {

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        CanvasDB.init(canvas)
        ModelDB.init(CanvasDB.gl)
        ShaderDB.init(CanvasDB.gl)
        LightDB.init()
        ItemDB.init(3)

        nextFrame()
    })
</script>

<canvas bind:this={canvas}/>