//Operadores Especiais

//delete
Pessoa = {
	nome: "João"
};

alert(Pessoa.nome);//João
delete Pessoa.nome;
alert(Pessoa.nome);//undefined


//in
Cachorro = {
	nome: "Goddart",
	raca: "Robótica"
};
alert("nome" in Cachorro);//true


//instance of
var idade = new Number(31);
alert(idade instanceof Number);//true


//this
alert(this.document.title);//this = window neste escopo


//typeof
var teste = 13
alert(typeof(teste))//number
alert(typeof(true))//boolean
alert(typeof(function(){}))//function