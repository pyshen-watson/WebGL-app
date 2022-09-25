export function getNow():number{
    return new Date().getTime()
}

export function getRadNow():number{
    return new Date().getTime() * Math.PI / 180
}