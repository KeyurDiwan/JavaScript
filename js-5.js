/**
 * Define a function sum() and a function multiply() that sums and multiplies (respectively) all 
 * the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) 
 * should return 24.

 */


function sum(arr) {
    let sum = 0;

    for(var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

function mul(arr) {
    let mul = 1;

    for(var i = 0; i < arr.length; i++) {
        mul = mul * arr[i];
    }

    return mul;
}

var arr = [1,2,3,4];
console.log(sum(arr), mul(arr))