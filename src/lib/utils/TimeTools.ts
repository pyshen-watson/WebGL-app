export function getNow():number{
    return new Date().getTime()
}

export function getRadNow():number{
    return new Date().getTime() * Math.PI / 180
}

export function getCosNow():number{
    return Math.cos(new Date().getTime() * Math.PI / 180)
}
export function getSinNow():number{
    return Math.sin(new Date().getTime() * Math.PI / 180)
}