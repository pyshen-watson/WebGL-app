import { mat4 } from 'gl-matrix'
import { get } from 'svelte/store'


import { webglStore } from '$store/WebGLStore'
import { ModelStoreList } from '$store/ModelStore'
import { ShaderStoreList } from '$store/ShaderStore'
import { ItemStoreList } from '$store/ItemStore'
import { LightStoreList } from '$store/LightStore'

import type Model from '$class/Model'
import type Shader from '$class/Shader'

import translate from './Transforms/Translate'
import rotate from './Transforms/Rotate'
import scale from './Transforms/Scale'
import shear from './Transforms/Shear'
import motion from './Transforms/Motion'

import flashing from './LightEffects/Flashing'
import changing from './LightEffects/Changing'
import moving from './LightEffects/Moving'
import dimming from './LightEffects/Dimming'

let mvMatrix = mat4.create() // perspective matrix
let pMatrix = mat4.create() // model-view matrix



function drawScene(){

    const webgl = get(webglStore)
    const gl = webgl.gl

    // Initialize viewport and perspective matrix
    gl.viewport(0, 0, webgl.width, webgl.height)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    mat4.perspective(pMatrix, 45, webgl.width / webgl.height, 0.1, 200)

    for( let id=0; id<3; id++){

        let store = LightStoreList[id]
        flashing(store)
        changing(store)
        moving(store)
        dimming(store)
    }

    for(let id=0; id<3; id++){

        let itemStore = ItemStoreList[id]
        let item = get(itemStore)

        // This case happens when model name is 'Hide' or the model is still loading
        if( !ModelStoreList[item.modelName] ) {continue}

        let shader:Shader = get(ShaderStoreList[item.shaderName])
        let model:Model = get(ModelStoreList[item.modelName])

        mat4.identity(mvMatrix)
        mvMatrix = translate(mvMatrix, item)
        mvMatrix = rotate(mvMatrix, itemStore)
        mvMatrix = scale(mvMatrix, item)
        mvMatrix = shear(mvMatrix, item)
        mvMatrix = motion(mvMatrix, item)


        gl.useProgram(shader.program)
        gl.uniformMatrix4fv(shader.pMatrix, false, pMatrix)
        gl.uniformMatrix4fv(shader.mvMatrix, false, mvMatrix)

        gl.bindBuffer(gl.ARRAY_BUFFER, model.vertexPositionsBuffer)
        gl.vertexAttribPointer(shader.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0)

        gl.bindBuffer(gl.ARRAY_BUFFER, model.vertexColorsBuffer)
        gl.vertexAttribPointer(shader.vertexColorAttribute, 3, gl.FLOAT, false, 0, 0)

        gl.bindBuffer(gl.ARRAY_BUFFER, model.vertexNormalsBuffer)
        gl.vertexAttribPointer(shader.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0)

        for(let lightID=0; lightID<3; lightID++){

            let light = get(LightStoreList[lightID])
            gl.uniform3fv(shader.lightColor[lightID], light.color)
            gl.uniform4fv(shader.lightPosition[lightID], light.location.coordinate.concat([1.0]))

        }

        gl.uniform1f(shader.Ka, item.material.Ka)
        gl.uniform1f(shader.Kd, item.material.Kd)
        gl.uniform1f(shader.Ks, item.material.Ks)
        gl.uniform1f(shader.Shininess, item.material.Shininess)

        gl.drawArrays(gl.TRIANGLES, 0, model.fragNumber)

    }
}

export default drawScene