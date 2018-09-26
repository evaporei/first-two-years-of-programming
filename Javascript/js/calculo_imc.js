function calcularImc(){

	const peso = document.getElementById('kilos').value;
	const alturaM = document.getElementById('metros').value;
	const alturaCm = document.getElementById('centimetros').value / 100;
	const altura = alturaM + alturaCm;

	if(peso === null || altura === null)
	{
		alert('Um ou mais campos está vazio');
		return;
	}
	const imc = peso / (altura * altura)

	document.getElementById('imc').value = imc

}