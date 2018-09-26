var texto: string = "rwealmente",
    numero: number = 4,
    bool: boolean = true;

// console.log(texto);

function funcao (mensagem: string, numero: number) {
    console.log(`Sua mensagem é ${mensagem}`)
    console.log(`Seu número é ${numero}`)
}

function printArray (array: Array<number>) {
    console.log(array);
}

function naoRetorna() {
    return "ai que ta a duvida";
}
var bla = naoRetorna();

// printArray([1,3,4]);

// funcao("sup", 4);

interface Person {
    name: string,
    age: number
};


function printPerson (person: Person) {
    console.log("name: " + person.name);
    console.log("age: " + person.age);
}

// printPerson({name: "john", age: 4});

class Menu {
    items: Array<string>;
    pages: number;

    constructor (item_list: Array<string>, total_pages: number) {
        this.items = item_list;
        this.pages = total_pages;
    }

    list (): void {
        console.log("Our menu for today: ");
        // this.items.forEach(item => console.log(item))
        for (var i = 0; i < this.items.length; i++)
            console.log(this.items[i]);
    }
}

var meuMenu = new Menu(["macarrao", "sopa"], 1);;

meuMenu.list();


class HappyMeal extends Menu {

}

var meuMenu = new HappyMeal(["macarrao", "sopa"], 1);;
meuMenu.list()

function notReturn () : void {
    // return "stuff";
}

function genericFunction<T> (argument: T): T[] {
    var arrayOfT : T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;
}

var strArray = genericFunction<string>("yeah");
strArray.push("boiiiiii");
console.log(strArray);

var numArray = genericFunction<number>(42);
console.log(numArray);


import sayHi = require('./exporter');
sayHi();
