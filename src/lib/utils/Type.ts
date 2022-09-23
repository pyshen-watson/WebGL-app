import type { Writable } from 'svelte/store'
import type Repository from '$class/Repository'

export type Vec3 = [number, number, number]

export type GL = {
    canvas:HTMLCanvasElement
    width:number
    height:number
    gl?: WebGLRenderingContext
}
export type GLStore = Writable<GL>
export type GLRepo = Repository<GL>


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
export type ModelRepo = Repository<Model>


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
export type ShaderRepo = Repository<Shader>


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
}
export type ItemStore = Writable<Item>
export type ItemRepo = Repository<Item>


export type Light = {
    location: Vec3
    color: Vec3
}
export type LightStore = Writable<Light>
export type LightRepo = Repository<Light>