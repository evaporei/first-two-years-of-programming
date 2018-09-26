// Example program
#include <iostream>
#include <string>
#include <math.h>

int binarySearch (int array[], int length, int target) {
    int min = 0,
        max = length - 1;
    
    int guess;
    
    while (max >= min) {
        guess = floor((max + min) / 2);
        
        if (array[guess] == target)
            return guess;
        
        if (array[guess] > target)
            max = guess - 1;
        else if (array[guess] < target)
            min = guess + 1;
    }
    
    return -1;
}

int main()
{
    // 24 elementos
    int primes [] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97};
    std::cout << binarySearch(primes, sizeof(primes) / sizeof(primes[0]), 13) << std::endl;
    return 0;
}
