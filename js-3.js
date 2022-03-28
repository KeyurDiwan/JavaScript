/*
    Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

*/

function checkVowel(char) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];

    for(var i = 0; i <= 4; i++) {
        if(vowel[i] === char) {
            return true;
        }
    }
    return false;
}

console.log(checkVowel('a'))