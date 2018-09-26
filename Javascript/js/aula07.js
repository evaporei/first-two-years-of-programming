function calcularIMC(){

	const formulario = document.getElementById('formulario');

	const peso = +formulario.kilos.value;
	const metros = parseInt(formulario.metros.value);
	const centimetros = +formulario.centimetros.value;

	const altura = metros + centimetros / 100

	const imc = peso / (altura * altura)

	formulario.imc.value = imc.toFixed(2);

	//toFixed(numeroDeCasasDepoisDaVirgula)

	switch(true){

		case (imc <= 20):
			alert('Abaixo do peso');
			break;

		case (imc <= 25):
			alert('Peso Ideal');
			break;

		case (imc <= 30):
			alert('Sobrepeso');
			break;

		case (imc <= 35):
			alert('Obesidade Moderada');;
			break;;

		case (imc <= 40):
			alert('Obesidade Severa');;
			break;;

		case (imc <= 50):
			alert('Obesidade Mórbida');;
			break;;

		case (imc > 50):
			alert('Super Obesidade');;
			break;;

	}

}