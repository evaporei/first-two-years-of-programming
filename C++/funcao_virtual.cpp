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
//sem virtual -> ligação prematura (pega do tipo acima) -> preferivel pelo c++
//com virtual -> ligação tardia (pega do tipo correto) -> preferivel pra orientacao a objeto
// decidido em tempo de execução
// não se podem construtores virtuais