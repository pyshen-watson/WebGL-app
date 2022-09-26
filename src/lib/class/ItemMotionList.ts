import ItemMotion from "./ItemMotion"

class ItemMotionList{

    crazy = new ItemMotion(0, (x:number) => 1)
    vibing = new ItemMotion(12, (x:number) => Math.cos(x))
    shaking = new ItemMotion(4, (x:number) => Math.cos(x))
    nodding = new ItemMotion(6, (x:number) => 0.5 * Math.sin(x))
    jumping = new ItemMotion(13, (x:number) => 3 * Math.sin(x))
    running = new ItemMotion(8, (x:number) => -Math.tan(x / 10))
    backing = new ItemMotion(8, (x:number) => Math.tan(x / 10))
    swinging = new ItemMotion(8, (x:number) => -Math.sin(x/6))
}

export default ItemMotionList