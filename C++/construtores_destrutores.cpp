#include <iostream>
#include <string.h>
using namespace std;

class Pessoa
{
	private:
		char nome[100];
		int idade;
		int* parentes;
		
		public:
			// Construtores
			Pessoa()
			{
			}
			Pessoa(const char* n, int& i)
			{
				strcpy(nome, n);
				idade = i;
				parentes = new int[100];
				cout << "Construtor de: " << nome << endl;
			}
			
			// Destrutor
			~Pessoa()
			{
				delete[] parentes;
				cout << "Destrutor de: " << nome << endl;
			}
			
			// Getters and Setters
			char* getNome()
			{
				return nome;
			}
			void setNome(const char* n)
			{
				strcpy(nome, n);
			}
			int getIdade()
			{
				return idade;
			}
			void setIdade(int& i)
			{
				idade = i;
			}
};

int main(int argc, char *argv[])
{
	Pessoa pessoas[3] = {
		{ "josefina", 60 },
		{ "joao", 30 },
		{ "roberta", 15 }
	};
	
	return 0;
}