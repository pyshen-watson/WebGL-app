<script lang="ts">
    import { onMount } from 'svelte'
    import { initGLRepo } from '$repo/GLRepo'
    import { initModelRepoList } from '$repo/ModelRepo'
    import { initShaderRepoList } from '$repo/ShaderRepo'
    import nextFrame from './nextFrame'

    let canvas:HTMLCanvasElement

    onMount(() => {

        let width:number = window.innerWidth
        let height:number = window.innerHeight

        canvas.width = width
        canvas.height = height

        initGLRepo({canvas, width, height})
        initModelRepoList()
        initShaderRepoList()

        nextFrame()
    })
</script>

<canvas bind:this={canvas}/>