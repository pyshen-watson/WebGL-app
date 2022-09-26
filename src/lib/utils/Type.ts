import type { Writable } from 'svelte/store'
import type WebGL from '$class/WebGL'
import type Model from '$class/Model'
import type Shader from '$class/Shader'
import type Item from '$class/Item'
import type Light from '$class/Light'

export type Vec3 = [number, number, number]
export type WebGLStore = Writable<WebGL>
export type ModelStore = Writable<Model>
export type ShaderStore = Writable<Shader>
export type ItemStore = Writable<Item>
export type LightStore = Writable<Light>