import type { ItemRepo } from '$utils/Type'
import { getNow } from '$utils/TimeTools'
import Repo from '$class/Repository'

const defaultShaderName = ["Flat", "Gouraud", "Phong"]
export let ItemRepoList: ItemRepo[] = []
for(let i=0; i<3; i++){

    let repo:ItemRepo = new Repo({

        modelName: "Teapot",
        shaderName: defaultShaderName[i],

        location_origin: [ (i-1)*55, 0, -100],
        location_shift: [ 0, 0, 0],

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
        material_Shininess: 1,

        motion_crazy: false,
        motion_vibing: false,
        motion_shaking: false,
        motion_nodding: false,
        motion_jumping: false,
        motion_running: false,
        motion_backing: false,
        motion_swinging: false
    })

    ItemRepoList.push(repo)
}