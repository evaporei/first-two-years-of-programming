/* Esse m�dulo cont�m fun��es matem�ticas */
int fatorial(int n) {
	int fat = 1;
	for (int i = n; i >= 1; i--) {
		fat *= i;
	}
	return fat;
}

int area_quadrado(int lado) {
	return lado * lado;
}

int area_retangulo(int comprimento, int largura) {
	return comprimento * largura;
}
