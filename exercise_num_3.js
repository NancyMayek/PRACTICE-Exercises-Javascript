/*Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
 */

const sumArray = (arr) => {
    return arr.reduce((preValue, value)=>{
        return preValue + value;
    },0);
}

const multiplyArray = (arr) => {
    return arr.reduce((preValue, value)=>{
        return preValue * value;
    },1);
}

const newarr = [1,2,3,4,5];
console.log('The total sum of the numbers of the array are : '+ sumArray(newarr));
console.log('The total product of the numbers of the array are : '+ multiplyArray(newarr));