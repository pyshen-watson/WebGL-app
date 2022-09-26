import type { WebGL, WebGLStore } from '$utils/Type'
import { writable } from 'svelte/store'

export let webglStore: WebGLStore
export function initWebGLStore(webgl: WebGL){

    const gl:WebGLRenderingContext = webgl.canvas.getContext("webgl")

    if (gl === null){
        alert("Your browser doesn't support WebGL.")
        return
    }

    gl.clearColor(0.0, 0.2, 0.2, 1.0)
    gl.enable(gl.DEPTH_TEST)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.getExtension('OES_standard_derivatives')

    webgl.gl = gl
    webglStore = writable(webgl)
}
