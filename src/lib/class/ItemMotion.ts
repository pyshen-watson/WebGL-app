class ItemMotion{

    on: boolean = false
    index: number
    func: Function

    constructor(index:number, func: Function){
        this.index = index
        this.func = func
    }
}

export default ItemMotion