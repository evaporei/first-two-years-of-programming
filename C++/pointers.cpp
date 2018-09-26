#include <iostream>

using namespace std;

void changeVar(int* number) {
	*number = 20;
}

int main() {
	int var = 10;
	
	cout << var << endl;
	
	changeVar(&var);
	
	cout << var << endl;
}