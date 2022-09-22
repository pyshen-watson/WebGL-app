import type GL from "$type/GL"
import Store from "$class/Store"

let GLStore:Store<GL>
export { GLStore as default}

export function initGLStore(options:GL){

    const gl:WebGLRenderingContext = options.canvas.getContext("webgl")

    if (gl === null){
        alert("Your browser doesn't support WebGL.")
        return
    }

    gl.clearColor(0.0, 0.2, 0.2, 1.0)
    gl.enable(gl.DEPTH_TEST)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.getExtension('OES_standard_derivatives')

    options.gl = gl
    GLStore = new Store(options)
}
