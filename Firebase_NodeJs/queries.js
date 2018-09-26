"use strict"
let firebase = require("firebase")
let http = require("http")

firebase.initializeApp({
    serviceAccount: "./REDACTED.json",
    databaseURL: "REDACTED"
})

//fork
let ref = firebase.database().ref("query-data")
let usersRef = ref.child("users")

//let userRef = usersRef.push()


usersRef.on("value", snapshot => console.log("users", snapshot.val()))

//runs once for each value added
usersRef.on("child_added", snapshot => console.log("child_added", snapshot.val()))

//this one will order by key, that means it will order by date
usersRef.orderByKey().on("child_added", snapshot => console.log("child_added", snapshot.val()))

//this one will order by the child especified
usersRef.orderByChild("order").on("child_added", snapshot => console.log("child_added", snapshot.val()))

//if it is key: value format you can use this to order them by value
usersRef.orderByValue().on("child_added", snapshot => console.log("child_added", snapshot.val()))

//get only the first one, ordered by key
usersRef.orderByKey().limitToFirst(1).on("child_added", snapshot => console.log("child_added", snapshot.val()))

//get only the last one, ordered by key
usersRef.orderByKey().limitToLast(1).on("child_added", snapshot => console.log("child_added", snapshot.val()))

/*
snapshot.val() -> value
snapshot.key() -> key
snapshot.ref.toString() -> link


equalTo(3) -> only 3 of orderByChild("order") -> R2D2
startAt(3)
endAt(3)
*/
/*
function getRealTime(ticker) {
    http.get({
        host: "www.google.com",
        port: 80,
        path: "/finance/info?client=ig&q=" + ticker
    }, response => {
        response.setEncoding("utf-8")
        let data = ""

        response.on("data", chunk => data += chunk)

        response.on("end", () => {
            if(data.length > 0) {
				try {
					var data_object = JSON.parse(data.substring(3));
				} catch(e) {
					return;
				}

				var quote = {};
				quote.ticker = data_object[0].t;
				quote.exchange = data_object[0].e;
				quote.price = data_object[0].l_cur;
				quote.change = data_object[0].c;
				quote.change_percent = data_object[0].cp;
				quote.last_trade_time = data_object[0].lt;
				//quote.dividend = data_object[0].div;
				//quote.yield = data_object[0].yld;

                console.log(quote)
                userRef.update(quote)
			}
        //response.on("end", () => console.log(data))
        })
    })
}

getRealTime("GOOG")
*/



//let user = getRealTime("GOOG")
//console.log(user)
//userRef.update(quote)
