import http from "http"
http.createServer((request, response) => {
	response.writeHead(200, "Content-Type": "text/html")
	response.end("<h1>There you go</h1>")
}).listen(3000)
/*
"use strict"
let firebase = require("firebase")

firebase.initializeApp({
    serviceAccount: "./REDACTED.json",
    databaseURL: "REDACTED"
})

//"attaches" to the "branch"/"fork" that you choose REDACTED
let ref = firebase.database().ref("node-client")
/*
//creates a new fork to the node-client fork
let messagesRef = ref.child("messages")

//will create a key
let messageRef = messagesRef.push()

console.log(messageRef.key)

//this is the data that will be sent to the key setted above
messageRef.set({
    name: "Otávio",
    admin: true,
    count: 1,
    text: "Hey, I am using Firebase!"
})
*/

/*
//this will delete everything in the branch
ref.update({
    messages: null
})
*/

//updates 2 branches with shared text
function test(howMany) {
    for (let i = 0; i < howMany; i++) {
        let messagesRef = ref.child("messages/")

        let messageRef = messagesRef.push()
        let messageKey = messageRef.key
        let payload = {}
        let message = {
            text: "hey guys"
        }

        payload["userMessages/" + messageKey] = message
        payload["logs/" + messageKey] = message
        console.log(payload)
        ref.update(payload)
    }
}
//test(5)

/*
//COMPANIES TEST
let companies = ref.child("companies/")

let apple = {
    name: "Apple",
    currentValue: 0.91,
    words: [
        "Macbook",
        "Iphone",
        "Xcode"
    ]
}

let google = {
    name: "Google",
    currentValue: 0.86,
    words: [
        "firebase",
        "gmail",
        "maps"
    ]
}

let microsoft = {
    name: "Microsoft",
    currentValue: 0.65,
    words: [
        "windows",
        "xbox",
        "azure"
    ]
}

let comps = {}

comps["apple"] = apple
comps["google"] = google
comps["microsoft"] = microsoft

companies.update(comps)

*/

/*
//COMPANIES TEST 2
let companies = ref.child("companies2/")

let apple = {
    name: "Apple",
    currentValue: 0.91,
    words: {
        Macbook: 0.9,
        Iphone: 0.95,
        Xcode: 0.3
    }
}

let google = {
    name: "Google",
    currentValue: 0.86,
    words: {
        Firebase: 0.5,
        Gmail: 0.76,
        Maps: 0.6
    }
}

let microsoft = {
    name: "Microsoft",
    currentValue: 0.65,
    words: {
        Windows: 0.8,
        Xbox: 0.7,
        Azure: 0.4
    }
}

let comps = {}

comps["apple"] = apple
comps["google"] = google
comps["microsoft"] = microsoft

companies.update(comps)
*/


/*
//SET IS DESTRUCTIVE
//this will remove everything in the node-client and set baloney
ref.set({
    baloney: true
})
*/

/*
//all values
ref.once("value")
   .then((snapshot) => {
       console.log(snapshot.key, "\n\n")//node-client
       console.log(snapshot.ref.toString(), "\n\n")//REDACTED
       console.log(snapshot.val(), "\n\n")//prints all content inside of node-client(logs and userMessages)
   })

ref.child("logs").once("value")
  .then((snapshot) => {
      console.log(snapshot.key, "\n\n")//node-client
      console.log(snapshot.ref.toString(), "\n\n")//REDACTED
      console.log(snapshot.val(), "\n\n")//prints all content inside of logs

  })
//ref.root.once...//root is the root directory: REDACTED

*/

/*
//value event, like changing it or deleting it will trigger
//it is waiting till some value is changed, useful but resource taking
let logs
ref.child("logs").on("value", (snap) => {
    logs = snap.val()
    console.log(logs)
})
*/

/*
//this one will be triggered for each child that is added to the ref.logs
//one thing is that it is fired once at the beggining
let logs
ref.child("logs").on("child_added", (snap) => {
    logs = snap.val()
    console.log(logs)
})
*/

/*
//listen to new records
ref.child("logs").orderByKey().limitToLast(1).on("child_added", (snap) => {
    console.log(snap.val())
})
*/

/*
//child removed
ref.child("logs").on("child_removed", (snap) => {
    console.log(snap.val())//shows last removed
})
*/

/*
//child changed -> triggered for each changed
ref.child("logs").on("child_changed", (snap) => {
    console.log(snap.val())//shows last changed
})
*/

/*
//keeping thack of adding, removing and deleting in the logs branch
ref.child("logs").orderByKey().limitToLast(1).on("child_added", (snap) => {
    console.log("added:",snap.val())
})
ref.child("logs").on("child_removed", (snap) => {
    console.log("removed:",snap.val())//shows last removed
})
ref.child("logs").on("child_changed", (snap) => {
    console.log("changed:",snap.val())//shows last changed
})
*/
