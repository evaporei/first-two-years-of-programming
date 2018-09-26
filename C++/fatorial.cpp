#include <iostream>

int main(int argc, char** argv)
{
	using namespace std;
	
	int numero;
	cout << "Digíte um número: ";
	cin >> numero;
	
	int fatorial = 1;
	if (numero == 0) {
		fatorial = 1;
		cout << "O fatorial de " << numero << " é: " << fatorial << endl;
		return 0;
	}
	for (int i = numero; i >= 1; i--) {
		fatorial *= i;
	}
	
	cout << "O fatorial de " << numero << " é: " << fatorial << endl;
	return 0;
}