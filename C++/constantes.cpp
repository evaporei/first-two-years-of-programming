#include <iostream>

using namespace std;

int main()
{
	const int vetor[] = {1, 2, 3};
	const int* p1 = &vetor[0];
	int const* p2;
	
	p1 = &vetor[1];
	p2 = &vetor[2];
	// *p1 = 4;// read-only variable
	// *p2 = 4;// read-only variable
	// int* const p3;
}