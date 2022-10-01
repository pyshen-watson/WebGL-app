import type { vec3 } from "gl-matrix"

class ModelSource {

    shift_base: vec3
    shift_grow: vec3
    degree_base: vec3
    degree_grow: vec3
    ratio: vec3

    vertexPositions: number[]
    vertexNormals: number[]
    vertexColors: number[]
}

export default ModelSource