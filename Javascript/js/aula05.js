/*
 Autor: Otávio Pace
 Data: 03/10/2016
 Propósito: altera a imagem, pergunta o nome do usuário e o exibe na tela
 */

function change(){
	var nome;//undefined
	nome = null;
	nome = 3 * 'pessoas';//NaN => Not a Number
	nome = 1.7976931348623157e+308;//limite, +309 da Infinity, pode ser negativo tbm, -Infinity
	nome = 2 + Infinity;//Infinity

	const HORAS_DO_DIA = 24;

	nome = prompt('Qual o seu nome?');

	alert(nome);

	var imagem = document.getElementById("DONT");
	imagem.src = "img/pewds.png";
}