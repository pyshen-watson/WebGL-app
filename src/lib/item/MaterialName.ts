enum MaterialName{
    Ka = 'Ka',
    Kd = 'Kd',
    Ks = 'Ks',
    Shininess = 'Shininess'
}

export let MaterialRange = {
    Ka: [0.0, 1.0, 0.1],
    Kd: [0.0, 1.0, 0.1],
    Ks: [0.0, 1.0, 0.1],
    Shininess: [-1.0, 5.0, 0.1]
}

export default MaterialName