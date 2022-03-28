/**
 * 
 * Write a function translate() that will translate a text into "rövarspråket". That is, double every 
 * consonant and place an occurrence of "o" in between. For example, translate("this is fun") should 
 * return the string "tothohisos isos fofunon".
 */

var arr = [];

var str = 'this is fun';
str = str.split('');
for(var i = 0; i < str.length; i++) {
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == ' '){
      continue;
    } else {
       str[i] = str[i] + 'o' + str[i];
      
    }
}

console.log(str.join(''))