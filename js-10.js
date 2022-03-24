/**
 * Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
 *  Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
 */


 function charFreq(source) {
    var frequency = {};
    for (var i = 0; i < source.length; i++) {
      var character = source.charAt(i);
      if (frequency[character]) {
        frequency[character]++;
      } else {
        frequency[character] = 1;
      }
    }
    return frequency;
  };
  
  console.log(charFreq("aabbabcbdbabdbdbabababcbcbab"));