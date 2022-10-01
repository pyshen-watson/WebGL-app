export type Vec3 = [number, number, number]

export const newVec3 = (value:number=0) => {
    let newV: Vec3 = [value, value, value]
    return newV
}

export const linear = (base:Vec3, grow:Vec3, times:number) => {
    let result = newVec3()
    result.forEach((_, i, arr) => {arr[i] = base[i] + grow[i] * times})
    return result
}

export enum Direction{

    X = 'X',
    Y = 'Y',
    Z = 'Z'
}

export enum Color{

    R = 'R',
    G = 'G',
    B = 'B',
}

export function Deg2Rad(degree:number){
    return degree * Math.PI / 180
}

export const dirMap = {
    'X':0,
    'Y':1,
    'Z':2
}

export function HSL2RGB(hue:number, saturation:number, lightness:number){

    // Reference: https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
    let red:number
    let green:number
    let blue:number

    const hue2rgb = (p:number, q:number, t:number) => {
        if(t < 0) t += 1
        if(t > 1) t -= 1
        if(t < 1/6) return p + (q - p) * 6 * t
        if(t < 1/2) return q
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6
        return p
    }

    if(saturation === 0){
        red = green = blue = lightness
    }

    else{
        let q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        let p = 2 * lightness - q;
        red = hue2rgb(p, q, hue + 1/3);
        green = hue2rgb(p, q, hue);
        blue = hue2rgb(p, q, hue - 1/3);
    }

    let RGB:Vec3 = [red*15, green*15, blue*15]

    return RGB
}

export function Level2Code(colorLevel: Vec3):string{

    const toHex = (level_half:number) => {
        let level_byte = Math.min(Math.floor(level_half*16), 255)
        return level_byte.toString(16).padStart(2, '0')
    }

    const code_r = toHex(colorLevel[0])
    const code_g = toHex(colorLevel[1])
    const code_b = toHex(colorLevel[2])

    return `#${code_r}${code_g}${code_b}`
}

export function Code2Level(colorCode:string):Vec3{

    if(colorCode.length !== 7){
        console.error('Error: Invalid color code, not the format: #??????')
        return
    }

    const toLevel = (hex:string) => Math.min(parseInt(hex, 16)/16, 15)
    const level_r = toLevel(colorCode.slice(1,3))
    const level_g = toLevel(colorCode.slice(3,5))
    const level_b = toLevel(colorCode.slice(5,7))

    return [level_r, level_g, level_b]
}

export function createColorGrid(column:number){

    let codeList:string[] = []

    for(let c=0; c<column; c++){
        let code = Level2Code(HSL2RGB(c/column, 1, 0.5))
        codeList.push(code)
    }

    for(let c=0; c<column; c++){
        let code = Level2Code(HSL2RGB(c/column, 1, 0.25))
        codeList.push(code)
    }

    for(let c=0; c<column; c++){
        let code = Level2Code(HSL2RGB(0, 0, c/(column-1)))
        codeList.push(code)
    }

    return codeList
}