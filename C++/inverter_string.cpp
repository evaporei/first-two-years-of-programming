#include <iostream>

using namespace std;

char* inverter (char string[]) {
	int tamanho;
	for (tamanho = 0; string[tamanho]; tamanho++);
	char string_invertida[tamanho];

	for (int i = 0; i < tamanho; i++)
		string_invertida[i] = string[tamanho - i];
	
	return string_invertida;
}

int main(int argc, char** argv)
{
	char nome[] = "otavio";
	cout << nome << endl;
	
	char* invertida = inverter(nome);
	cout << invertida << endl;
	
	return 0;
}