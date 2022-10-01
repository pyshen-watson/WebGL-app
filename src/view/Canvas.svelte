<script lang="ts">
    import { onMount } from 'svelte'

    import CanvasDB from '$canvas/CanvasDB'
    import ModelDB from '$model/ModelDB'
    import ShaderDB from '$shader/ShaderDB'
    import LightDB from '$light/LightDB'
    import ItemDB from '$item/ItemDB'
    import nextFrame from './nextFrame'

    let canvas:HTMLCanvasElement

    onMount(() => {

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        CanvasDB.init(canvas)
        ModelDB.init(CanvasDB.gl)
        ShaderDB.init(CanvasDB.gl)
        LightDB.init(3)
        ItemDB.init(3)

        nextFrame()
    })
</script>

<canvas bind:this={canvas}/>