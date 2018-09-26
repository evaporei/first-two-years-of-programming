#include <iostream>
using namespace std;

class ClasseMae {
	public:
		virtual void mostrarMensagem() {
			cout << "Ola, sou a classe mae" << endl;
		}
};

class ClasseFilha : public ClasseMae {
	public:
		void mostrarMensagem() {
			cout << "Ola, sou a classe filha" << endl;
		}
};

void foo(ClasseMae* p) {
	p->mostrarMensagem();
}

int main(int argc, char *argv[])
{
	ClasseMae mae;
	ClasseFilha filha;
	
	foo(&mae);
	foo(&filha);
	
	return 0;
}
//sem virtual -> liga��o prematura (pega do tipo acima) -> preferivel pelo c++
//com virtual -> liga��o tardia (pega do tipo correto) -> preferivel pra orientacao a objeto
// decidido em tempo de execu��o
// n�o se podem construtores virtuais