#include <iostream>
#include "my_math_module.h"

int main(int argc, char** argv)
{
	using namespace std;
	
	cout << fatorial(0) << endl;
	cout << area_quadrado(4) << endl;
	cout << area_retangulo(2, 4) << endl;
	return 0;
}