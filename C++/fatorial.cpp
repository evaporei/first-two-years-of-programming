#include <iostream>

int main(int argc, char** argv)
{
	using namespace std;
	
	int numero;
	cout << "Dig�te um n�mero: ";
	cin >> numero;
	
	int fatorial = 1;
	if (numero == 0) {
		fatorial = 1;
		cout << "O fatorial de " << numero << " �: " << fatorial << endl;
		return 0;
	}
	for (int i = numero; i >= 1; i--) {
		fatorial *= i;
	}
	
	cout << "O fatorial de " << numero << " �: " << fatorial << endl;
	return 0;
}