#include <iostream>

int main(int argc, char** argv)
{
	using namespace std;
	
	cout << "Calculadora!" << endl;
	
	char funcaoDesejada;
	
	while (funcaoDesejada != 's') {
		cout << "\nFun��es do programa" << endl;
		cout << "i -> informa��es" << endl;
		cout << "c -> calcular" << endl;
		cout << "s -> sair" << endl;
		cin >> funcaoDesejada;
		switch (funcaoDesejada) {
			case 'i':
				cout << "Opera��es suportadas pela calculadora:" << endl;
				cout << "+ -> soma" << endl;
				cout << "- -> subtra��o" << endl;
				cout << "* -> multiplica��o" << endl;
				cout << "/ -> divis�o" << endl;
				break;
			case 'c':
				float numero1, numero2, resultado;
				char operacao;
				cout << "Dig�te o primeiro n�mero: ";
				cin >> numero1;
				cout << "Dig�te o segundo n�mero: ";
				cin >> numero2;
				cout << "Dig�te a opera��o desejada: ";
				cin >> operacao;
				
				switch (operacao) {
					case '+':
						resultado = numero1 + numero2;
						cout << "O resultado da opera��o �: " << resultado << endl;
						break;
					case '0':
						resultado = numero1 - numero2;
						cout << "O resultado da opera��o �: " << resultado << endl;
						break;
					case '*':
						resultado = numero1 * numero2;
						cout << "O resultado da opera��o �: " << resultado << endl;
						break;
					case '/':
						if (numero2 == 0) {
							cout << "Divis�o por zero!" << endl;
							break;
						}
						resultado = numero1 / numero2;
						cout << "O resultado da opera��o �: " << resultado << endl;
						break;
					default:
						cout << "Opera��o n�o suportada" << endl;
				}
				break;
			case 's':
				break;
			default:
				cout << "Fun��o n�o existente" << endl;
		}
	}
	
	return 0;
}