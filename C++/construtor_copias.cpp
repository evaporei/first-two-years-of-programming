#include <iostream>
#include <string.h>
using namespace std;

class Estudante;
void criaEstudante();
void criaCopiaEstudante(Estudante e);

class Estudante
{
private:
	char* nome;
public:
	Estudante(const char* n)
	{
		int tamanho = strlen(n);
		allocateNome(tamanho);
		strcpy(nome, n);
		cout << "Construindo objeto " << nome << endl;
	}
	Estudante(const Estudante& e)
	{
		const char* n = this->getNome();
		cout << "Construindo copia de " << e.nome << endl;
		int tamanho = strlen(e.nome) + strlen("Copia de ") + 1;
		this->clearNome();
		this->allocateNome(tamanho);
		strcat(this->nome, n);
	}
	
	~Estudante()
	{
		cout << "Destruindo... " << nome << endl;
		clearNome();
	}
	const char* getNome()
	{
		return nome;
	}
	void allocateNome(int tamanho)
	{
		nome = new char[tamanho + 1];// +1 devido ao caracter nulo
	}
	void clearNome()
	{
		delete[] nome;
	}
	void setNome(const char* str)
	{
		strcpy(nome, str);
	}
};

void criaEstudante()
{
	Estudante e("pedro");
	criaCopiaEstudante(e);
}

void criaCopiaEstudante(Estudante e)
{
	
}

int main(int argc, char *argv[])
{
	criaEstudante();
	
	return 0;
}