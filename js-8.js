/**
 * 
 * Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

 */

function findLongestWord(arr) {

    var max = 0;
    var index
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].length > max) {
            max = arr[i].length;
            index = i;
        }
    }

    return arr[index]

}

var arr = ['abc', 'abcds', 'abcde', 'abcdef']
console.log(findLongestWord(arr).length)

