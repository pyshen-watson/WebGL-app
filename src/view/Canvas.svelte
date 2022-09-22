<script lang="ts">
    import { onMount } from 'svelte'
    import { initGLStore } from '../lib/store/GLStore'

    let canvas:HTMLCanvasElement

    onMount(() => {

        let width:number = window.innerWidth
        let height:number = window.innerHeight /2

        canvas.width = width
        canvas.height = height

        initGLStore({canvas, width, height})

    })
</script>

<canvas bind:this={canvas}/>