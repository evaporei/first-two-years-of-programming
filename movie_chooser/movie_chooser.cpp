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
	
	vector<string> movies;
	
	ifstream file;
	file.open("movies.txt");
	
	string movieFullName = "";
	
	int numberOfMovies = 0;
	int i = 0;
	while (!file.eof()) {
		if (i++ == 0)
			continue;
		
		string temp;
		file >> temp;
		
		if (temp == "-") {
			movies.push_back(movieFullName);
			movieFullName = "";
			numberOfMovies++;
			continue;
		}
		
		movieFullName = movieFullName + " " + temp;
	}
	
	// escolher número randomico
	srand(time(NULL));
	int randomNumber = (rand() % movies.size());
	cout << "Watch" << movies[randomNumber] << endl;
	

	file.close();
	system("pause");
	return 0;
}