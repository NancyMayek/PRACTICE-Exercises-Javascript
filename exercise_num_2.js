/* Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/ 

const doubleValue = (arr) => {
    const doubleArr = [];
    arr.forEach(element => {
        doubleArr.push(element*2);
    });
    return doubleArr;
}

const normalArray = [1, 2, 4, 5];
console.log(doubleValue(normalArray));