var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
		
function binarySearch (array, target) {
	let min = 0
	let max = array.length - 1
	
	let guess
	
	while (max >= min) {
		guess = Math.floor((max + min) / 2)
		console.log("Min: " + min)
		console.log("Max: " + max)
		console.log("Guess: " + guess + "\n")
		if (array[guess] === target)
			return guess
		
		if (array[guess] > target)
			max = guess - 1
		else if (array[guess] < target)
			min = guess + 1
	}
	
	return -1
}

console.log(binarySearch(primes, 3))