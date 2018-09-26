#include <iostream>
#include <string.h>
using namespace std;

class Linguagem
{
	friend class LinguagemAmiga;
private:
	char nome[100];
public:
	void mostrarNome()
	{
		cout << "Nome: " << nome << endl;
	}
	char * getNome()
	{
		return nome;
	}
	void setNome(const char n[])
	{
		strcpy(nome, n);
	}
};

class LinguagemAmiga
{
	private:
		Linguagem * ling;
	public:
		LinguagemAmiga(Linguagem * l) : ling(l)
		{
		}
		void mostrarNomeLinguagem()
		{
			ling->mostrarNome();
		}
};

int main(int argc, char *argv[])
{
	Linguagem l;
	l.setNome("C++");
	cout << l.getNome() << endl;
	
	LinguagemAmiga la(&l);
	la.mostrarNomeLinguagem();
	return 0;
}