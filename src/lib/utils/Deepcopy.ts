function deepcopy<T> (input:T):T {
    const copy:T = JSON.parse(JSON.stringify(input))
    return copy
}

export default deepcopy