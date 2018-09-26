#include <iostream>
using namespace std;

class Conta {
public:
	static int numero;
	double saldo;
	
	Conta() {
		numero++;
	}
	
	
	double depositar(double quantidade) {
		if (quantidade > 0)
			this->saldo += quantidade;
		return this->saldo;
	}
	
	double retirar(double quantidade) {
		if (quantidade > 0 && this->saldo >= quantidade)
			this->saldo -= quantidade;
		return this->saldo;
	}
};

void foo(Conta& c) {
	c.depositar(400);
}

Conta* novaConta(double saldoInicial){
	Conta * conta = new Conta();
	conta->saldo = saldoInicial;
	return conta;
}

int Conta::numero = 0;

int main(int argc, char *argv[])
{
	Conta conta;
	
	conta.saldo = 100.75;
	
	cout << "Saldo: " << conta.saldo << endl;
	foo(conta);
	cout << "Saldo depois dos depositos: " << conta.depositar(100) << endl;
	cout << "Saldo depois do saque: " << conta.retirar(50) << endl;
	
	cout << endl;
	
	Conta * c = novaConta(600);
	cout << c->numero << endl;
	cout << c->saldo;
	
	
	return 0;
}