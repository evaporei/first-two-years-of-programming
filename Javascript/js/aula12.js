"use strict"
//O objeto Math não possui método construtor, tudo é estático

console.log(Math.PI)//3.141592653589793
//abs() valor absoluto
console.log(Math.abs(-2))//2
console.log(Math.abs(3.7))//3.7
//max() maior número dos parâmetros(NÃO ACEITA ARRAY/VETOR)
console.log(Math.max(1,2,-3))//2
//min() menor valor dentro dos parâmetros
console.log(Math.min(1,2,-3))//-3

//round() arredonda para o mais próximo
console.log(Math.round(3.3))//3
//floor() arredonda sempre para baixo
console.log(Math.floor(3.3))//3
//ceil() arredonda sempre para cima
console.log(Math.ceil(3.3))//4

//pow() power, potência -> 5 elevado a 3 -> 5 * 5 * 5 -> 125
console.log(Math.pow(5, 3))//125
//sqrt() square, raiz quadrada -> 144 -> 12 * 12
console.log(Math.sqrt(144))//12

//random() retorna um número randômico entre 0 e 1
console.log(Math.random())
//let n = Math.floor(Math.random() * 10)//de 0 a 10
let n = Math.floor(Math.random() * 10 + 1)//de 1 a 10
console.log(n)

//exp() retorna o exponêncial da constante de Euler(2.718281828459045) -> E elevado ao argumento
console.log(Math.exp(3))//20.085536923187668 = 2.7 * 2.7 * 2.7
//log() logaritmo
console.log(Math.log(10))//2.302585092994046
//sin() seno do ângulo informado no parâmtro
console.log(Math.sin(3))//0.1411200080598672
//cos() cosseno do ângulo informado no parâmtro
console.log(Math.cos(3))//-0.9899924966004454
//tan() tangente do ângulo informado no parâmtro
console.log(Math.tan(3))//-0.1425465430742778
