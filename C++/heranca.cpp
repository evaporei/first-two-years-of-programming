#include <iostream>
#include <string.h>
using namespace std;

class Animal {
	private:
		char* nome;
	public:
		Animal(const char* nome) {
			cout << "Construindo animal" << endl;
			this->nome = new char[strlen(nome) + 1];
			strcpy(this->nome, nome);
		}
		~Animal() {
			cout << "Destruindo animal" << endl;
			delete[] this->nome;
		}
		const char* getNome()
		{
			return this->nome;
		}
};

class Cachorro : public Animal{
	private:
		int idade;
	public:
		Cachorro(const char* nome) : Animal(nome) {
			cout << "Construindo cachorro" << endl;
			idade = 0;
		}
		~Cachorro()
		{
			cout << "Destruindo cachorro" << endl;
		}
		int getIdade()
		{
			return idade;
		}
		void setIdade(int i) {
			idade = i;
		}
};

int main(int argc, char *argv[])
{
	Cachorro c("ma boii");
	c.setIdade(6);
	
	cout << "Nome: " << c.getNome() << endl;
	cout << "Idade: " << c.getIdade() << endl;
	return 0;
}