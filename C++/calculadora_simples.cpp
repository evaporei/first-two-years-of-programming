#include <iostream>

int main(int argc, char** argv)
{
	using namespace std;
	
	cout << "Calculadora!" << endl;
	
	char funcaoDesejada;
	
	while (funcaoDesejada != 's') {
		cout << "\nFunções do programa" << endl;
		cout << "i -> informações" << endl;
		cout << "c -> calcular" << endl;
		cout << "s -> sair" << endl;
		cin >> funcaoDesejada;
		switch (funcaoDesejada) {
			case 'i':
				cout << "Operações suportadas pela calculadora:" << endl;
				cout << "+ -> soma" << endl;
				cout << "- -> subtração" << endl;
				cout << "* -> multiplicação" << endl;
				cout << "/ -> divisão" << endl;
				break;
			case 'c':
				float numero1, numero2, resultado;
				char operacao;
				cout << "Digíte o primeiro número: ";
				cin >> numero1;
				cout << "Digíte o segundo número: ";
				cin >> numero2;
				cout << "Digíte a operação desejada: ";
				cin >> operacao;
				
				switch (operacao) {
					case '+':
						resultado = numero1 + numero2;
						cout << "O resultado da operação é: " << resultado << endl;
						break;
					case '0':
						resultado = numero1 - numero2;
						cout << "O resultado da operação é: " << resultado << endl;
						break;
					case '*':
						resultado = numero1 * numero2;
						cout << "O resultado da operação é: " << resultado << endl;
						break;
					case '/':
						if (numero2 == 0) {
							cout << "Divisão por zero!" << endl;
							break;
						}
						resultado = numero1 / numero2;
						cout << "O resultado da operação é: " << resultado << endl;
						break;
					default:
						cout << "Operação não suportada" << endl;
				}
				break;
			case 's':
				break;
			default:
				cout << "Função não existente" << endl;
		}
	}
	
	return 0;
}