import { mat4 } from 'gl-matrix'
import type { Model, Shader, ItemRepo } from '$utils/Type'
import { glRepo } from '$repo/GLRepo'
import { ModelRepoList } from '$repo/ModelRepo'
import { ShaderRepoList } from '$repo/ShaderRepo'
import { ItemRepoList } from '$repo/ItemRepo'
import { LightRepoList } from '$repo/LightRepo'

import translate from './Transforms/translate'
import rotate from './Transforms/rotate'
import scale from './Transforms/scale'
import shear from './Transforms/shear'

let mvMatrix = mat4.create() // perspective matrix
let pMatrix = mat4.create() // model-view matrix

function drawScene(){

    // Initialize viewport and perspective matrix
    const GL = glRepo.getInstance()
    const gl = GL.gl

    gl.viewport(0, 0, GL.width, GL.height)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    mat4.perspective(pMatrix, 45, GL.width / GL.height, 0.1, 200)

    for(let itemID=0; itemID<3; itemID++){

        let itemRepo = ItemRepoList[itemID]
        let item = itemRepo.getInstance()

        // This case happens when model name is 'Hide' or the model is still loading
        if( !ModelRepoList[item.modelName] ) {continue}

        let shader:Shader = ShaderRepoList[item.shaderName].getInstance()
        let model:Model = ModelRepoList[item.modelName].getInstance()

        mat4.identity(mvMatrix)
        mvMatrix = translate(mvMatrix, item)
        mvMatrix = rotate(mvMatrix, itemRepo)
        mvMatrix = scale(mvMatrix, item)
        mvMatrix = shear(mvMatrix, item)


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

            let light = LightRepoList[lightID].getInstance()
            gl.uniform3fv(shader.lightColor[lightID], light.color)
            gl.uniform4fv(shader.lightPosition[lightID], light.location.concat([1.0]))
            
        }

        gl.uniform1f(shader.Ka, item.material_Ka)
        gl.uniform1f(shader.Kd, item.material_Kd)
        gl.uniform1f(shader.Ks, item.material_Ks)
        gl.uniform1f(shader.Shininess, item.material_Shininess)

        gl.drawArrays(gl.TRIANGLES, 0, model.fragNumber)

    }
}

export default drawScene