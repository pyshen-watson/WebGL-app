import ShaderName from './ShaderName'
import { flatVertex, flatFragment } from '$shader/Flat'
import { gouraudVertex, gouraudFragment } from '$shader/Gouraud'
import { phongVertex, phongFragment } from '$shader/Phong'
import { celVertex, celFragment } from '$shader/Cel'

class ShaderSource{

    vertexSource: string
    fragmentSource: string


    constructor(name:ShaderName){

        if(name === ShaderName.Flat){
            this.vertexSource = flatVertex
            this.fragmentSource = flatFragment
        }

        else if(name === ShaderName.Gouraud){
            this.vertexSource = gouraudVertex
            this.fragmentSource = gouraudFragment
        }

        else if(name === ShaderName.Phong){
            this.vertexSource = phongVertex
            this.fragmentSource = phongFragment
        }

        else if(name === ShaderName.Cel){
            this.vertexSource = celVertex
            this.fragmentSource = celFragment
        }

        else{
            console.error("Wrong shader name")
        }
    }
}

export default ShaderSource