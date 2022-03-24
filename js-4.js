/**
 * 
 * Write a function translate() that will translate a text into "rövarspråket". That is, double every 
 * consonant and place an occurrence of "o" in between. For example, translate("this is fun") should 
 * return the string "tothohisos isos fofunon".

 */

var arr = [];

var str = 'this is fun';

for(var i = 0; i < str.length; i++) {
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
        arr.push(str[i]);
    }else if(str[i] == ' '){
        arr.push(' ')
    } else {
        arr.push(str[i]);
        arr.push('o');
        arr.push(str[i]);
    }
}

console.log(arr.join(''))