import Canvas from './Canvas'
import { get } from 'svelte/store'
import type { CanvasStore } from '$utils/Type'

class CanvasDB{

    static db: CanvasStore

    static init(canvas: HTMLCanvasElement){
        this.db = new Canvas(canvas).toStore()
        this.setColor(0.1, 0.2, 0.2, 1.0)
    }

    static get width(){
        return get(this.db).width
    }

    static get height(){
        return get(this.db).height
    }

    static get gl(){
        return get(this.db).gl
    }

    static setColor(red:number, green:number, blue:number, alpha:number){
        this.gl.clearColor(red, green, blue, alpha)
    }
}

export default CanvasDB