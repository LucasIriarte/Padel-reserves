


export const getShedulesHelper = () => {
    const hours = []
    for (let i = 9; i <= 23; i++) {
        i == 9 ? hours.push([`0${i}:00`, `0${i}:30`]) : i == 23 ? hours.push([`${i}:00`]) : hours.push([`${i}:00`, `${i}:30`])
    }
    return hours.flat()
}