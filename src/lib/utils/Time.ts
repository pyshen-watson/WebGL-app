namespace Time {

    export function getNow(){
        return new Date().getTime()
    }

    export function getRadNow(){
        return new Date().getTime() * Math.PI / 180
    }
}

export default Time