/*
    Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
*/

function maxOfThree() {
    var a = 15;
    var b = 12;
    var c = 19;

    if(a > b && a > c){
        console.log(a)
    } else if(b > a && b > c) {
        console.log(b)
    } else {
        console.log(c);
    }
}

maxOfThree();