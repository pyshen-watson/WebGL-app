import type { Vec3 } from "$utils/Math"

class ModelSource {

    shift_base: Vec3
    shift_grow: Vec3
    degree_base: Vec3
    degree_grow: Vec3
    ratio: Vec3

    vertexPositions: number[]
    vertexNormals: number[]
    vertexColors: number[]
}

export default ModelSource