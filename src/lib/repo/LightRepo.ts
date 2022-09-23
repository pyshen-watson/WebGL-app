import Repo from '$class/Repository'
import type { LightRepo } from '$utils/Type'

export let LightRepoList: LightRepo[] = []
for(let i=0; i<3; i++){

    let repo:LightRepo = new Repo({
        location: [(i-1)*100, 0, 0],
        color: [1, 1, 1]
    })

    LightRepoList.push(repo)
}