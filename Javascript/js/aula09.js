let nome = "Otávio"
alert(nome.length)
let string = new String();
string = "heyy";//faz com que vire primitivo
alert(typeof(string))
alert(string)
alert(string instanceof String)//para a variavel continuar sendo um objeto do tipo String, precisaria ser setada no construtor
//alert(new String(nome).length)
//objetos primitivos não possuem atributos e funções
//quando neles são chamados essas propriedades, há uma criação de um objeto para utilizar tal propriedade

//Boolean
let b;
b = new Boolean(true)//true
b = new Boolean("")//false
b = new Boolean("false")//true
b = new Boolean(0)//false
b = new Boolean(42)//true
/*
Zero, null, NaN and a empty string are all false, the rest is all true
*/
alert(b.valueOf())//true
alert(b.toString())//"true"
//b ainda é do tipo Boolean/Object, o método toString() não o converte a String, apenas o exibe convertido

//Number
let n;
n = new Number(160.23)
n = new Number("120.65")//same
n = new Number(50.123456)
alert(n.toFixed())//50
alert(n.toFixed(2))//50.12
alert(n)//50.123456 still
alert(n.toFixed(7))//50.1234560
alert(n.toPrecision())
alert(n.toPrecision(2))//50
alert(n.toPrecision(6))//50.1235
alert(n.toPrecision(1))//Notação científica(5e+1)
alert(n.toExponential())//converte um número para notação exponencia, pode receber parâmetrosl


//métodos estáticos -> da classe, não dependentesde instancia
alert(Number.MAX_VALUE)
alert(Number.MIN_VALUE)//5e-324
alert(Number.NaN)//NaN
alert(Number.POSITIVE_INFINITY)
alert(Number.NEGATIVE_INFINITY)



//String
let x = new String("texto bacana")
console.log(x.length)//tamanho da String(12)
console.log(x.charAt(4))//catacter na porição 4(o)
console.log(x.charCodeAt(4))//catacter no formato unicode na porição 4(111)
console.log(x.concat(" e banana"))//concatena ao final da string
console.log(String.fromCharCode(115))//s
console.log(String.fromCharCode(115, 111, 123))//so{
console.log(x.indexOf("bacana"))//onde começa a palavra bacana(6)
console.log(x.lastIndexOf("bacana"))//última ocorrência da palavra bacana(6) -> ainda a primeira letra da ocorrência
//console.log(x.match(regExp))//expressão regular
console.log(x.replace("texto", "txt"))//troca texto por txt na string
console.log(x.substring(5,8))//do caracter 5 ao 8, se fosse (8,5) ele iria dar o mesmo resultado, pq vai do menor para o maior
console.log(x.substr(3,5))//do caracter 3 mais 5(até o 8)
console.log(x.slice(5, 8))//igual ao substring, mas só funciona se o primeiro parametro for menor que o segundo parametro
console.log(x.slice(8, 5))//não traz nada
//console.log(x.split(","))//divide a string em um array separado pelo parâmetro
console.log(x.toUpperCase())//para letra maiúscula
console.log(x.toLowerCase())//para letra minúscula

//Array Indexado
//Colexão de dados
"use strict";
let paises = new Array("Brasil", "Rússia", "Índia", "China");
let array = ["Brasil", "Rússia", "Índia", "China"]
//Mesmo efeito ao imprimir na tela, os itens são separados por vírgula


/*PRINT
console.log(paises)
console.log(array)
alert(paises)
alert(array)
*/


/*
//Achar Índia
for (let i = 0; i < paises.length; i++){
    if (paises[i] == "Índia") {
        console.log("A Índia está na posição", i)
        break;
    }
}
//OU
console.log("A Índia está na posição", paises.indexOf("Índia"))
*/

//Legth = Tamanho
//console.log(paises.length)//4

//indexOf = qual o índice da primeira aparição de uma string
//console.log(paises.indexOf("Brasil"))//0

//lastIndexOf = qual o índice da última aparição da string
//console.log(paises.lastIndexOf("Rússia"))//1 -> só aparece uma vez

//reverse = inverte o array
//console.log(paises.reverse())//"China", "Índia", "Rússia", "Brasil"

//sort = ordena de forma alfabética
//console.log(paises.sort())//"Brasil", "China", "Índia", "Rússia"


//join = retorna uma string que junta todo o array com um separador
let todosOsPaises = paises.join()//adiciona a vírgula ao concatenar(, padrão)
    todosOsPaises = paises.join(" --- ")
console.log(todosOsPaises)


//concat = concatena uma string ao array ou um array a outro array
let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]
arr1 = arr1.concat(arr2)
console.log(arr1)//[1, 2, 3, 4, 5, 6, 7, 8]


//slice
let frutas = ["banana", "morango", "melância", "melão", "goiaba"]
frutas = frutas.slice(2)
frutas = frutas.slice(1,3)//1 a 3, não inclui o 3
console.log(frutas)//["melância", "melão", "goiaba"]


//splice
frutas = frutas.splice(1, 2, "abacate", "laranja", "maçã")
console.log(frutas)
//pesquisar ???????????????????????
//20:00 - https://www.youtube.com/watch?v=j68n6l5_Fe4&index=27&list=PLHO9UhS3tkPTvd2ZD86Kf69lXOQlLlfnX

//push = adiciona ao final
let arrayLegal = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrayLegal)

arrayLegal.push(9)//adiciona o 9 no final, mais um elemento -> e retorna o novo número de itens no array
console.log(arrayLegal)

//shift = remove o primeiro da fila
arrayLegal.shift();//remove o 1
console.log(arrayLegal)


//pop = remove o último elemento da fila
arrayLegal.pop();// remove o 9
console.log(arrayLegal)


//unshift = adiciona elemento ao início da fila
arrayLegal.unshift(1);//adiciona o 1 no começo
console.log(arrayLegal)
