"use strict";
let data = new Date()
console.log(data)//Sat Oct 15 2016 19:01:29 GMT-0300 (Hora oficial do Brasil)

//o milissegundo 0 é 01/01/1970
let milissegundos = new Date(123456)
//let milissegundos = new Date(-123456)//vai para trás no tempo
console.log(milissegundos)//Wed Dec 31 1969 22:02:03 GMT-0200 (Horário brasileiro de verão)
//ele retorna 1969 devido ao fuso horário

let dataString = new Date("Jul/20/2011 02:30:35")
//let dataString = new Date("Jul/20/2011")//padrão é 00:00:00
console.log(dataString)


let dataCompleta = new Date(-2000, 11, 31, 0, 0, 0, 0)//Mon Jan 31 2000 00:00:00 GMT-0200 (Horário brasileiro de verão)
console.log(dataCompleta)
//11 de Mês pois começa no 0
//1999 = 2000
//0 = 1900
//1 = 1901
//O ano e o mês são obrigatórios, o resto pode ficar vazio
//se o número passar a quantidade permitida, ele passa para a próxima(13 mêses = 1 ano e 1 mês)

console.log(data.getDate())//retorna o dia do mês
console.log(data.getHours())//Brasil
console.log(data.getUTCHours())//Universal
console.log(data.getDay())//dia da semana(6 = sábado, 0 a 6)
console.log(data.getFullYear())//ano em quatro dígitos
console.log(data.getMilliseconds())//retorna 0 caso na data não tenha sido informado o número de milissegundos
console.log(data.getMinutes())//retorna o número de minutos
console.log(data.getMonth())
console.log(data.getSeconds())
console.log(data.getTime())//retorna o total de milissegundos desde 01/01/1970
console.log(data.getTimezoneOffset())//retorna em minutos a diferença do horário local para com o Universal(UTC ou GMT)
//Todas essas funções possuem uma versão UTC(ex:getUTCHours()), que funcionam da mesma forma mas são baseadas no horário universal


console.log(Date.parse("09/10/1997"))//número de milissegundos de uma data informada, pode ser uma variável, tanto faz

data.setFullYear(2017)
console.log(data)

data.setDate(26)//dia do mês
console.log(data)

data.setMonth(10)//novembro
console.log(data)

//conversor
console.log(data.toDateString())//"Sun Nov 26 2017"
console.log(data.toLocaleDateString())//"11/26/2017"
