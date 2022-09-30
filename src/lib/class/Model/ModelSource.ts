import type { Vec3 } from "$utils/Math"

class ModelSource {

    ratio: Vec3
    degree: Vec3
    autoRotate: boolean

    vertexPositions: number[]
    vertexNormals: number[]
    vertexColors: number[]
}

export default ModelSource