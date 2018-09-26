#include <iostream>
using namespace std;

typedef struct Pessoa {
	const char* nome;
	
private:
	int idade;

public:
	Pessoa () {}
	
	Pessoa (int idade);
	
	void setIdade(int idade)
	{
		this->idade = idade;
	}
	int getIdade()
	{
		return this->idade;
	}
} t_pessoa;

Pessoa::Pessoa (int numero) : idade(numero)
{
	
}


int main(int argc, char *argv[])
{
	Pessoa jonas;
	jonas.nome = "jonas";
	//jonas.idade = 18;
	
	cout << jonas.nome << endl;
	
	t_pessoa bob;
	bob.nome = "bob";
	bob.setIdade(10);
	
	cout << bob.nome << endl;;
	
	Pessoa jorge(50);
	cout << jorge.getIdade() << endl;
	return 0;
}