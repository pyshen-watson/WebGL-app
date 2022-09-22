type Item = {

    shaderName: string
    modelName: string

    location: number[]

    rotation_degree: number[]
    rotation_direction: number[]
    rotation_auto: boolean
    rotation_speed: number
    rotation_lastAngle: number
    rotation_lastTime: number

    scaling_origin: number[]
    scaling_ratio: number[]

    shearing_direction: number[]
    shearing_degree: number[]

    material_Ka: number
    material_Kd: number
    material_Ks: number
    material_Shininess: number
}

export default Item