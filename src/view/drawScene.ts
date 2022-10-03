import { mat4, vec3 } from 'gl-matrix'

import CanvasDB from '$canvas/CanvasDB'
import ModelDB from '$model/ModelDB'
import ShaderDB from '$shader/ShaderDB'
import LightDB from '$light/LightDB'
import ItemDB from '$item/ItemDB'


let mvMatrix = mat4.create() // perspective matrix
let pMatrix = mat4.create() // model-view matrix

function drawScene(){

    const gl = CanvasDB.gl

    // Initialize viewport and perspective matrix
    gl.viewport(0, 0, CanvasDB.width, CanvasDB.height)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    mat4.perspective(pMatrix, 45, CanvasDB.width / CanvasDB.height, 0.1, 200)


    // Apply light effects
    for( let id=0; id<3; id++){

        let store = LightDB.getStore(id)
        store.update(($store) => {

            let out = $store.applyEffect()
            $store.color.level = out.color
            $store.location.shift = out.shift
            return $store
        })
    }

    for(let id=0; id<3; id++){

        let item = ItemDB.getInstance(id)
        let shader = ShaderDB.getInstance(item.shaderName)
        let model = ModelDB.getInstance(item.modelName)

        if(!model) { continue }

        mat4.identity(mvMatrix)
        item.apply(mvMatrix)

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

            let light = LightDB.getInstance(lightID)
            gl.uniform3fv(shader.lightColor[lightID], light.color.level)
            gl.uniform4fv(shader.lightPosition[lightID], light.location.translate)
        }

        gl.uniform1f(shader.Ka, item.material.Ka)
        gl.uniform1f(shader.Kd, item.material.Kd)
        gl.uniform1f(shader.Ks, item.material.Ks)
        gl.uniform1f(shader.Shininess, item.material.Shininess)

        gl.drawArrays(gl.TRIANGLES, 0, model.fragNumber)

    }
}

export default drawScene