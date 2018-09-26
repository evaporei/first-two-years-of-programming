#include <iostream>
using namespace std;

template <class Tipo>
class Pilha
{
	private:
		int* vetor;
		int tamanho_maximo;
		int topo;
	public:
		Pilha(int capacidade) {
			vetor = new Tipo[capacidade];
			tamanho_maximo = capacidade - 1;
			topo = -1;
		}
		~Pilha() {
			delete[] vetor;
		}
		void empilhar(Tipo elemento) {
			if (topo == tamanho_maximo)
				throw "Pilha cheia";
			else
				vetor[++topo] = elemento;
		}
		void desempilhar() {
			if (topo == -1)
				throw "Pilha vazia";
			else
				topo--;
		}
		Tipo getTopo() {
			if (topo == -1)
				throw "Pilha vazia";
			return vetor[topo];
		}
		bool estaVazia() {
			return (topo == -1);
		}
};

// operator<< 

int main(int argc, char *argv[])
{
	Pilha<int> p(100);
	try {
		cout << "Pilha vazia: " << boolalpha << p.estaVazia() << endl;
		p.empilhar(5);
		p.empilhar(-14);
		
		p.desempilhar();
		
		cout << "Topo: " << p.getTopo() << endl;
		
		cout << "Pilha vazia: " << boolalpha << p.estaVazia() << endl;
		
	} catch (const char* erro) {
		cout << "Erro: " << erro << endl;
	}
	
	return 0;
}