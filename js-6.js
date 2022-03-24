/**
 * Define a function reverse() that computes the reversal of a string. 
 * For example, reverse("jag testar") should return the string "ratset gaj".

 */

function reverse(str) {
    var str1 = '';
    
    for(var i = str.length - 1; i >= 0; i--) {
        str1 += str[i]
    }

    console.log(str1)
}

reverse('jag tester')