
export function transformObjectToArray(data) {
    if(data !== null) {
        let i = 0
        for (let key in data) {
            data[key].token = key
            data[key].id = i
            i++
        }
        return Object.values(data)
    }
    return []
}

const rand = function() {
    return Math.random().toString(36).substr(2);
}

export const createToken = function() {
    return rand() + rand();
}