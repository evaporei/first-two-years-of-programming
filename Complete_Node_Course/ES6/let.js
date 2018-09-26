(function () {
    var test = 0

    if (true) {
        var zoo = 12
    }

    //both test and zoo are accessible inside and outside the if statement
    console.log(zoo)

})()

console.log("\n------\n")

;(function () {
    let rick = 10

    if (true) {
        let morty = 400

        console.log(morty)
    }
    //not accessible
    //console.log(morty)

    //accessible
    console.log(rick)
})()

console.log("\n------\n")

;(function () {
    for (var i = 0; i < 3; i++) {
        console.log(`for loop: i = ${i}`)
    }
    console.log(i)
})()

console.log("\n------\n")

;(function () {
    for (let i = 0; i < 3; i++) {
        console.log(`for loop: i = ${i}`)
    }
    //i does not exist
    //console.log(i)
})()

console.log("\n------\n")

;(function () {
    function genCallback() {
        let name = "Otávio"
        return function () {
            //name here is accessible
            console.log(`Hello ${name}`)
        }
    }

    genCallback()()
})()