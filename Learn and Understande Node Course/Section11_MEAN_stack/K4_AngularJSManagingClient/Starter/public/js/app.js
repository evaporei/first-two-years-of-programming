angular.module("TestApp", [])

angular.module("TestApp")
    .controller("MainController", mainControllerFunc)


function mainControllerFunc() {
    //"this" object will be the body one because of the controller choosed 
    this.message = "Hello"

    this.people = [
        {
            name: "John Doe"
        },
        {
            name: "Jane Doe"
        },
        {
            name: "Jim Doe"
        }
    ]
}