export enum MaterialName{
    Ka = 'Ka',
    Kd = 'Kd',
    Ks = 'Ks',
    Shininess = 'Shininess',
}

class Material{

    Ka: number
    Kd: number
    Ks: number
    Shininess: number

    constructor(){
        this.reset()
    }

    reset(name?:MaterialName){

        if(!name || name === MaterialName.Ka)
            this.Ka = 0.1

        if(!name || name === MaterialName.Kd)
            this.Kd = 0.1

        if(!name || name === MaterialName.Ks)
            this.Ks = 0.1

        if(!name || name === MaterialName.Shininess)
            this.Shininess = 2.5
    }
}

export default Material