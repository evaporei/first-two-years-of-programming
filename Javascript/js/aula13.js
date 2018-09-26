"use strict"
let regexx = new RegExp("Javascript")
let regex = /JavaScript///forma literal
let string = "JavaScript"//case sensitive

console.log(regex.test(string))//true

regex = /javascript/
console.log(regex.test(string))//false

//Modificadores
//i -> ignora letras maiúsculas e minúsculas
regex = /javascript/i
regexx = new RegExp("javascript", "i")
console.log(regex.test(string))//true

console.log(/javascript/i.test("JavaScript"))//true

//Funções
//test(string) -> retorna true/false se o padrão ocorreu ou não
console.log(/javascript/.test("JavaScript"))//falso pois não encontrou

//exec(str) -> encontra e retorna a primeira referência a ser procurada
console.log(/doce/i.exec("Qual é o Doce mais doce que o doce?"))//Doce -> pois é a primeira ocorrência

//str.match(regex)  -> retorna um array com todas as ocorrências em uma string
let str = "Qual é o Doce mais doce que o doce?"
console.log(str.match(/doce/ig))//[Doce,doce,doce]


//Metacaracteres
//.  -> ocorrência de qualquer caracter com exceção de novas linhas(\n)
console.log(/./.test("Pier\n2"))//true
console.log(/./.test("Pier2"))//true

//\w  -> procura qualquer caracter de A-Z e 0-9 e _
console.log(/\w/.test("*"))//false
console.log(/\w/.test("_0-9 e A-Z"))//true

//\s  -> ocorrência de espaços na string
console.log(/\s/.test("bla "))//true
console.log(/\s/.test("bla"))//false

//\d  -> procura por dígitos(números)
console.log(/\d/.test("Eu tenho um 54número na frase"))//true
console.log(/\d/.test("Eu não tenho :("))//false

//^ procura pela ocorrência no começo da string
console.log(/^está no começo?/.test("está no começo? SIM!!"))//true

//$ procura pela ocorrência no final da string
console.log(/estou no fim$/.test(":) estou no fim"))


//Como descobrir se há ocorrência de dígitos no final de meu texto
console.log(/\d$/.test("Pier21"))//true
//e dois dígitos no final do texto?
console.log(/\d\d$/.test("Pier22"))//true
console.log(/\d\d\d$/.test("Pier22"))//false

//Validação de CEP
console.log(/^\d\d\d\d\d-\d\d\d$/.test("07856-024"))//inicia com 5 dígitos, um hífem e outros 3 dígitos//true



//Quantificadores - determinam a ocorrência de uma determinada quantidade
//* -> 0 ou mais ocorrências
console.log(/\d*/.test("Pier"))//true
console.log(/\d*/.test("Pier22"))//true

//+ -> 1 ou mais ocorrências
console.log(/\d+/.test("Pier"))//false -> 0 ocorrências
console.log(/\d+/.test("Pier22"))//true

//? -> 0 ou uma ocorrência
console.log(/\d?/.test("Pier"))//true
console.log(/\d?/.test("Pi3r"))//true -> 1 ocorrência
console.log(/\d?/.test("P13r"))//true -> 2 ocorrências????

//{} -> quantidade
console.log(/\d{2}$/.test("Pier22"))//true -> encontrou 2 ocorrências de dígitos no final da frase

//nova forma de validar CEP
console.log(/^\d{5}-\d{3}$/.test("70294-070"))
//validação de data
console.log(/^\d{2}\/\d{2}\/\d{2,4}$/.test("09/10/997"))//false
//validação de e-mail
console.log(/\w+@\w+\.\w{2,3}/.test("otaviopp8@gmail.com"))

//[] Agrupadores
//avalia tanto cau quanto ceu
console.log(/c[ae]u/.test("cau"))//true
console.log(/c[ae]u/.test("ceu"))//true

//digítos com ou sem vírgula
console.log(/[\d,]*/.test("23,45"))
console.log(/[\d\.]*/.test("23.45"))//com ponto ao invés de vírgula



//BUSCAS E SUBSTITUIÇÕES
let stringg = "Qual é o Doce mais doce que o doCe?"
console.log(stringg.match(/doce/ig))//[Doce,doce,doCe]
console.log(stringg.replace(/doce/ig, "DOCINHO"))// "Qual é o DOCINHO mais DOCINHO que o DOCINHO?"

let sturing = "O rato roeu a roupa do rei de Roma."
console.log(sturing.match(/r[a-z]+/ig))//["rato", "roeu", "roupa", "rei", "Roma"]
console.log(sturing.replace(/r[a-z]+/ig, "XXX"))// O XXX XXX a XXX do XXX de XXX.


let url = "www.xti.com.br/clientes-2011.html"
 //"http://www.xti.com.br/2011/clientes.jsp"
let re = /(www\.xti\.com\.br)\/(\w{2,})-(\d{4})\.html/
console.log(re.test(url))//true
//cada parênteses vira uma variável($1 = www.xti.com.br, $2 = \w...)
console.log(url.replace(re, "http://$1/$3/$2.jsp"))
