// let locations = [{
//     name: "São Paulo",
//     weather: 26
// }, {
//     name: "Rio de Janeiro",
//     weather: 42
// }]

// for (let location of locations)
//     console.log(`It's ${location.weather} in ${location.name}`)

function averageGrades (...grades) {
    let average = 0
    for (let grade of grades)
        average += grade
    return average / grades.length
}

let total = averageGrades(1, 44, 99)

console.log(total)