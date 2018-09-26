#include <iostream>
#include <string.h>
#define MAX 10
using namespace std;

void bubble_sort(int vetor[], int tamanho);
void bubble_sort_test();

class Carro {
public:
	char nome[100];
	char cor[20];
	char placa[20];
	double preco; 
};

void ordena_carros(Carro carros[], int tamanho) {
	Carro aux;
	for (int c = 0; c < tamanho; c++){
		for (int i = 0; i < tamanho - c; i++) {
			if (strcmp(carros[i].nome, carros[i+1].nome) == 1) {
				aux = carros[i];
				carros[i] = carros[i+1];
				carros[i+1] = aux;
			}
		}
	}
}


int main(int argc, char *argv[])
{
	Carro carros[MAX];
	
	int i = 0;
	
	cout << "Inserção de dados dos carros: " << endl;
	
	while(true) {
		cout << i + 1 << " Carro: " << endl;
		cout << "Digíte o nome do " << i + 1 << "º carro: ";
		cin >> carros[i].nome;
		cout << "Digíte o preco do " << i + 1 << "º carro: ";
		cin >> carros[i].preco;
		i++;
		
		cout << endl;
		
		char resposta;
		cout << "Você deseja continuar?(S = sim; N = nao): ";
		cin >> resposta;
		
		while (resposta != 'S' && resposta != 'N' && resposta != 's' && resposta != 'n') {
			cout << "Digíte uma resposta válida(S = sim; N = nao): ";
			cin >> resposta;
		}
		cout << endl;
		if (resposta == 'N' || resposta == 'n')
			break;
	}
	
	int tamanho = i;
	cout << endl;
	cout << "Exibição de todos os carros inseridos: " << endl;
	
	for(i = 0; i < tamanho; i++) {
		cout << i + 1 << " Carro: " << endl;
		cout << "Nome: " << carros[i].nome << endl;
		cout << "Preco: " << carros[i].preco << endl;
		cout << endl;
	}
	
	cout << endl;
	
	cout << "Exibição de todos os carros ordenados pelo nome: " << endl;
	
	ordena_carros(carros, tamanho);
	
	for(i = 0; i < tamanho; i++) {
		cout << i + 1 << " Carro: " << endl;
		cout << "Nome: " << carros[i].nome << endl;
		cout << "i: " << i << endl;
		cout << "Preco: " << carros[i].preco << endl;
		cout << endl;
	}
	
	 // bubble_sort_test();
	return 0;
}




// testes

void bubble_sort(int vetor[], int tamanho) {
	int aux;
	for (int c = 0; c < tamanho; c++) {
		for (int i = 0; i < tamanho - c; i++) {
			if (vetor[i] > vetor[i+1]) {
				aux = vetor[i];
				vetor[i] = vetor[i+1];
				vetor[i+1] = aux;
			}
		}
	}
}

void bubble_sort_test() {
	int array[] = {5, 2, 9, 8, 1, 4};
	// {2, 5, 8, 1, 4, 9}
	for (int i = 0; i < sizeof(array)/sizeof(int); i++) {
		if (i == 0)
			cout << "[";
		else {
			if (i == sizeof(array)/sizeof(int) - 1)
				cout << array[i] << "]";
			else
				cout << array[i] << ", ";
		}
		
	}
	
	cout << endl;
	
	bubble_sort(array, sizeof(array)/sizeof(int));
	
	for (int i = 0; i < sizeof(array)/sizeof(int); i++) {
		if (i == 0)
			cout << "[";
		else {
			if (i == sizeof(array)/sizeof(int) - 1)
				cout << array[i] << "]";
			else
				cout << array[i] << ", ";
		}
		
	}
	// {1, 2, 4, 5, 8, 9}
}