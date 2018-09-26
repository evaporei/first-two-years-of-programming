#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <stdlib.h>
#include <time.h>
#include <windows.h>

int main(int argc, char** argv)
{
	using namespace std;
	
	vector<string> jogos;
	
	ifstream arquivo;
	arquivo.open("JOGOS.txt");
	
	string nomeJogoCompleto = "";
	
	int numeroDeJogos = 0;
	int i = 0;
	while (!arquivo.eof()) {
		// primeira vez
		if (i++ == 0)
			continue;
		
		// pega texto do arquivo
		string temp;
		arquivo >> temp;
		// cout << temp << endl;
		
		// se for - é porque já foi um jogo
		if (temp == "-") {
			jogos.push_back(nomeJogoCompleto);
			nomeJogoCompleto = "";
			numeroDeJogos++;
			continue;
		}
		
		nomeJogoCompleto = nomeJogoCompleto + " " + temp;
	}
	/*
	cout << numeroDeJogos << endl;	
	for (int c = 0; c < numeroDeJogos; c++) {
		cout << jogos[c] << endl;
	}
	cout << jogos.size() << endl;
	cout << jogos[0] << endl;
	*/
	
	// escolher número randomico
	srand(time(NULL));
	int randomNum = (rand() % jogos.size());
	cout << "Jogue" << jogos[randomNum] << endl;
	

	arquivo.close();
	system("pause");
	return 0;
}