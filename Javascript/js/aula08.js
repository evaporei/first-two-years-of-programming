//Exceções

try {
	let x = a;
	let b = x + 10;
} catch (erro) {
	alert(erro.toString())//ReferenceError: is not defined
}

/*
Objeto Error
-message
-name
-toString() -> retorna "name: message"

nomes de erros:
EvalError       -    Erro utilizando eval() -> função que executa código javascript
RangeError      -    Número que extrapola os limítes
ReferenceError  -    Referência a valor infefinido
SintaxeError    -    Erro de sintaxe da linguagem
TypeError       -    Operando diferente do esperado
URIError        -    Uso errado de funções URL

*/