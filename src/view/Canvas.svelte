<script lang="ts">
    import { onMount } from 'svelte'
    import { initGLStore } from '$store/GLStore'
    import { initModelStoreList } from '$store/ModelStore'
    import { initShaderStoreList } from '$store/ShaderStore'
    import nextFrame from './nextFrame'

    let canvas:HTMLCanvasElement

    onMount(() => {

        let width:number = window.innerWidth
        let height:number = window.innerHeight /2

        canvas.width = width
        canvas.height = height

        initGLStore({canvas, width, height})
        initModelStoreList()
        initShaderStoreList()

        nextFrame()
    })
</script>

<canvas bind:this={canvas}/>