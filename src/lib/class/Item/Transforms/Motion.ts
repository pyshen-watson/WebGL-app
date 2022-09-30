class Motion{

    on: boolean = false
    index: number
    func: Function

    constructor(index:number, func: Function){
        this.index = index
        this.func = func
    }
}

class ItemMotion{

    crazy = new Motion(0, (x:number) => 1)
    vibing = new Motion(12, (x:number) => Math.cos(x))
    shaking = new Motion(4, (x:number) => 0.1 * Math.cos(x))
    dancing = new Motion(6, (x:number) => 0.5 * Math.sin(x))
    jumping = new Motion(13, (x:number) => 3 * Math.sin(x))
    running = new Motion(8, (x:number) => -Math.tan(x/10))
    backing = new Motion(8, (x:number) => Math.tan(x/10))
    swinging = new Motion(8, (x:number) => -Math.sin(x/6))

    reset(){
        this.crazy.on = false
        this.vibing.on = false
        this.shaking.on = false
        this.dancing.on = false
        this.jumping.on = false
        this.running.on = false
        this.backing.on = false
        this.swinging.on = false
    }
}

export default ItemMotion
export { type Motion }