import type { vec3 } from 'gl-matrix'

class Color {

    static ColorName = ['R', 'G', 'B']

    static ColorFullName = ["red", "green", "blue"]

    static Code2Level = (colorCode: string): vec3 => {

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

    static Level2Code = (colorLevel: vec3):string => {

        const toHex = (level_half:number) => {
            let level_byte = Math.min(Math.floor(level_half*16), 255)
            return level_byte.toString(16).padStart(2, '0')
        }

        const code_r = toHex(colorLevel[0])
        const code_g = toHex(colorLevel[1])
        const code_b = toHex(colorLevel[2])

        return `#${code_r}${code_g}${code_b}`
    }

    static HSL2RGB = (hue: number, saturation: number, lightness: number): vec3 => {

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

        return [red*15, green*15, blue*15]
    }

    static createColorGrid = (column:number) => {

        let codeList:string[] = []

        for(let c=0; c<column; c++){
            let code = this.Level2Code(this.HSL2RGB(c/column, 1, 0.5))
            codeList.push(code)
        }

        for(let c=0; c<column; c++){
            let code = this.Level2Code(this.HSL2RGB(c/column, 1, 0.25))
            codeList.push(code)
        }

        for(let c=0; c<column; c++){
            let code = this.Level2Code(this.HSL2RGB(0, 0, c/(column-1)))
            codeList.push(code)
        }

        return codeList
    }
    
}

export default Color