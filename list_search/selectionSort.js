const selectionSort = (array) => {
    const indexOfMinimum = (startIndex) => {
        let minValue = array[startIndex];
        let minIndex = startIndex;

        for(let i = startIndex + 1; i < array.length; i++) {
            if (array[i] < minValue) {
                minIndex = i;
                minValue = array[i];
            }
        }

        return minIndex;
    };
    const swap = (firstIndex, secondIndex) => {
        const temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    };

    for (let i = 0; i < array.length; i++) {
        let minimum = indexOfMinimum(i);
        swap(i, minimum);
    }
    
    return array;
};

console.log(selectionSort([5,4,3,2,1]));
console.log(selectionSort([145,15,21,17,42]));