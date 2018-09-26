#include <iostream>

bool isEven(int numer) {
	return numer % 2 == 0 ? true : false;
}

int main(int argc, char** argv)
{
	using namespace std;
	int number;
	cout << "Type a number: ";
	cin >> number;
	
	if (isEven(number))
		cout << number << " is even." << endl;
	else
		cout << number << " is odd." << endl;
	return 0;
}