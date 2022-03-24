/**
 * 
 * Write a function filterLongWords() that takes an array of words and an integer 
 * i and returns the array of words that are longer than i.

 */

function filterLongWords(arr, num) {

    var newArr = [];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i].length > num) {
            newArr.push(arr[i]);
        }
    }

    return newArr;

}

var arr  =  ['a', 'ab','abc', 'abcd', ' abcde','abcde','abcdef']

console.log(filterLongWords(arr, 3))