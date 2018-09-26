"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var texto = "rwealmente", numero = 4, bool = true;
// console.log(texto);
function funcao(mensagem, numero) {
    console.log("Sua mensagem \u00E9 " + mensagem);
    console.log("Seu n\u00FAmero \u00E9 " + numero);
}
function printArray(array) {
    console.log(array);
}
function naoRetorna() {
    return "ai que ta a duvida";
}
var bla = naoRetorna();
;
function printPerson(person) {
    console.log("name: " + person.name);
    console.log("age: " + person.age);
}
// printPerson({name: "john", age: 4});
var Menu = (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    Menu.prototype.list = function () {
        console.log("Our menu for today: ");
        // this.items.forEach(item => console.log(item))
        for (var i = 0; i < this.items.length; i++)
            console.log(this.items[i]);
    };
    return Menu;
}());
var meuMenu = new Menu(["macarrao", "sopa"], 1);
;
meuMenu.list();
var HappyMeal = (function (_super) {
    __extends(HappyMeal, _super);
    function HappyMeal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HappyMeal;
}(Menu));
var meuMenu = new HappyMeal(["macarrao", "sopa"], 1);
;
meuMenu.list();
function notReturn() {
    // return "stuff";
}
function genericFunction(argument) {
    var arrayOfT = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
var strArray = genericFunction("yeah");
strArray.push("boiiiiii");
console.log(strArray);
var numArray = genericFunction(42);
console.log(numArray);
var sayHi = require("./exporter");
sayHi();
