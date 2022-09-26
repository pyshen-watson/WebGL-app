import type { Vec3 } from "./Type"

export function degToRad(degree:number){
    return degree * Math.PI / 180
}

export let dirMap = {'X':0, 'Y':1, 'Z':2}

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