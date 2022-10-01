namespace Tool{

    export function deepcopy<T> (input:T):T {
        const copy = JSON.parse(JSON.stringify(input))
        return copy
    }

}

export default Tool




