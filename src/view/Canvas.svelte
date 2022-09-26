<script lang="ts">
    import { onMount } from 'svelte'
    import { initWebGLStore } from '$store/WebGLStore'
    import { initModelStoreList } from '$store/ModelStore'
    import { initShaderStoreList } from '$store/ShaderStore'
    import nextFrame from './nextFrame'

    let canvas:HTMLCanvasElement

    onMount(() => {

        let width:number = window.innerWidth
        let height:number = window.innerHeight

        canvas.width = width
        canvas.height = height

        initWebGLStore({canvas, width, height})
        initModelStoreList()
        initShaderStoreList()
        nextFrame()
    })
</script>

<canvas bind:this={canvas}/>