import type { ItemRepo } from '$utils/Type'
import { getNow } from '$utils/TimeTools'
import Repo from '$class/Repository'

const defaultShaderName = ["Flat", "Gouraud", "Phong"]
export let ItemRepoList: ItemRepo[] = []
for(let i=0; i<3; i++){

    let repo:ItemRepo = new Repo({

        modelName: "Teapot",
        shaderName: defaultShaderName[i],

        location: [ (i-1)*55, 0, -100],

        rotation_degree: [0, 0, 0],
        rotation_direction: [0, 1, 0],
        rotation_auto: true,
        rotation_speed: 30,
        rotation_lastAngle: 0,
        rotation_lastTime: getNow(),

        scaling_origin: [1, 1, 1],
        scaling_ratio: [1, 1, 1],

        shearing_direction: [1, 0, 0],
        shearing_degree: [0, 0, 0],

        material_Ka: 0.1,
        material_Kd: 0.1,
        material_Ks: 0.1,
        material_Shininess: 1
    })

    ItemRepoList.push(repo)
}