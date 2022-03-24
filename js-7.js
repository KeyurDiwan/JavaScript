/**
 * Represent a small bilingual lexicon as a Javascript object in the following fashion
 *  {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} 
 * and use it to translate your Christmas cards from English into Swedish.

 */


function translate(str) {
    var lexicon = {
        "merry":"god", 
        "christmas":"jul", 
        "and":"och", 
        "happy":"gott", 
        "new":"nytt", 
        "year":"år"
    }
    q = '';
    str.toLowerCase().split(' ').map(function(p, c) {
        q += lexicon[p] + " ";
    }) 

    console.log(q);
}

var str = "Merry Christmas and Happy New Year";

translate(str)