import type { Writable } from 'svelte/store'
import type Canvas from '$canvas/Canvas'
import type Model from '$model/Model'
import type Shader from '$shader/Shader'
import type Light from '$light/Light'
import type Item from '$item/Item'

export type GL = WebGLRenderingContext
export type CanvasStore = Writable<Canvas>
export type ModelStore = Writable<Model>
export type ShaderStore = Writable<Shader>
export type LightStore = Writable<Light>
export type ItemStore = Writable<Item>