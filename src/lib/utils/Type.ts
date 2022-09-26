import type { Writable } from 'svelte/store'

export type Vec3 = [number, number, number]

export type WebGL = {
    canvas:HTMLCanvasElement
    width:number
    height:number
    gl?: WebGLRenderingContext
}
export type WebGLStore = Writable<WebGL>


export type Model = {
    scale: Vec3
    rotationDirection: Vec3
    rotationDegree: Vec3
    rotationAuto: boolean
    locationShift: Vec3

    vertexPositions: number[]
    vertexNormals: number[]
    vertexColors: number[]

    vertexPositionsBuffer?: WebGLBuffer
    vertexNormalsBuffer?: WebGLBuffer
    vertexColorsBuffer?: WebGLBuffer
    fragNumber?:number
}
export type ModelStore = Writable<Model>


export type Shader = {

    program: WebGLProgram

    vertexPositionAttribute?: number
    vertexColorAttribute?: number
    vertexNormalAttribute?: number

    lightColor?: WebGLUniformLocation[]
    lightPosition?: WebGLUniformLocation[]

    Ka?: WebGLUniformLocation
    Kd?: WebGLUniformLocation
    Ks?: WebGLUniformLocation
    Shininess?: WebGLUniformLocation

    pMatrix?: WebGLUniformLocation
    mvMatrix?: WebGLUniformLocation
}
export type ShaderStore = Writable<Shader>


export type Item = {

    shaderName: string
    modelName: string

    location_origin: Vec3
    location_shift: Vec3

    rotation_degree: Vec3
    rotation_direction: Vec3
    rotation_auto: boolean
    rotation_speed: number
    rotation_lastAngle: number
    rotation_lastTime: number

    scaling_origin: Vec3
    scaling_ratio: Vec3

    shearing_direction: Vec3
    shearing_degree: Vec3

    material_Ka: number
    material_Kd: number
    material_Ks: number
    material_Shininess: number

    motion_crazy: boolean
    motion_vibing: boolean
    motion_shaking: boolean
    motion_nodding: boolean
    motion_jumping: boolean
    motion_running: boolean
    motion_backing: boolean
    motion_swinging: boolean
}
export type ItemStore = Writable<Item>


export type LightMotionState = {
    on: boolean
    init: boolean
    origin: Vec3
}

export type Light = {

    location: Vec3
    color: Vec3

    motion_flashing: LightMotionState
    motion_changing: LightMotionState
    motion_moving: LightMotionState
    motion_dimming: LightMotionState
}
export type LightStore = Writable<Light>