#include <iostream>
#include <string.h>
using namespace std;

class Pessoa {
public:
	char nome[100];
	char cpf[20];
	int idade;
};

int getIdade(Pessoa pessoas[], const char* nome)
{
	int tamanho = sizeof(pessoas);
	
	for (int i = 0; i < tamanho; i++)
		if (strcmp(nome, pessoas[i].nome) == 0)
			return pessoas[i].idade;

    return -1;
}

int main(int argc, char *argv[])
{
	Pessoa pessoas[3] = {
		{"João", "1111111111", 30},
		{"Maria", "1111111111", 20},
		{"Pedro", "1111111111", 25}
	};
	
	
	
	cout << pessoas[0].nome << endl;
	cout << pessoas[1].nome << endl;
	cout << pessoas[2].nome << endl;
	
	int idade = getIdade(pessoas, "Pedro");
	if (idade != -1)
		cout << "Idade do Pedro: " << idade << endl;
	else
		cout << "Pedro não exite no array pesosas";
	return 0;
}