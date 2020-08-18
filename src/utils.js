
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