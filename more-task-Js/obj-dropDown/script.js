/*

we will be given a list of objects like  these: [{ a: 12, b: 15, c: 25 },{ a: 22, b: 17, d: 27 },{ a: 12, b: 35, c: 29, d: 32 }]. 
And you have to create a dropdown with a key as a label and its corresponding values as the elements in the dropdown. And you have
to avoid the duplicate values in the dropdown. For e. g: for the label "a" the dropdown will contain 12,22 as the values. After that 
when the user selects something from the dropdown you should filter the objects from the list of objects given at first. For example, 
if the user selects the label "a" with the value of 12 then you should display { a: 12, b: 15, c: 25 },{ a: 12, b: 35, c: 29, d: 32 }.

 */
let showOp = document.getElementById('showOp')

let select = document.getElementById("arr");
let objDataKeyVal;



// select.appendChild('fhhhf')
let arrayData = [
  { a: 12, b: 15, c: 25 },
  { a: 22, b: 17, d: 27 },
  { a: 12, b: 35, c: 29, d: 32 }

]

let arrObj = [
  { '12': 'a', '15': 'b', '25': 'c' },
  { '22': 'a', '17': 'b', '27': 'd' },
  { '12': 'a', '35': 'b', '29': 'c', '32': 'd' } ]

 
 

let storeData = arrObj.reduce(function(result, current) {
    
  return Object.assign(result, current);
}, {});

var result = Object.keys(storeData).map((key) => [Number(key), storeData[key]]);


for (var i = 0; i < result.length; i++) {
  var optn = result[i];
  var el = document.createElement("option");
  el.textContent = optn;
  el.value = optn;

  console.log(el, "elll")
  select.appendChild(el);
}

function getOption() {
  selectElement = document.querySelector('#arr');
  objDataKeyVal =  selectElement.value;

  console.log(objDataKeyVal.split(','));
  objDataKeyVal =   objDataKeyVal.split(',')

var ele = objDataKeyVal[1];
var val = +objDataKeyVal[0];
var showArr = [];
console.log(ele,val)
displayData(ele,val, showArr)
 
}

function displayData (ele,val, showArr) {

  arrayData.forEach((element, index, array) => {
    
    console.log(element[ele]); // 100, 200, 300

    if(element[ele] == val) {
      
      showArr.push(index)

     
    }
  
});



let j = 0;

let objDataArr = []



for(let i = 0; i < arrayData.length; i++) {
 
  if(i == showArr[j]) {
    objDataArr.push(arrayData[i])
    j++; 
  }


  var newStr = ''
for(var i1 = 0; i1 < objDataArr.length; i1++) {



var str = ''

  for (const property in objDataArr[i1]) {
  
    str =  str + ' ' + `${property}: ${objDataArr[i1][property]}`;
  }



newStr =  newStr + '\n'+ str + ',';




}



}


console.log(newStr, 'str')
var elData = document.createElement("h2");

elData.innerHTML = newStr;
showOp.appendChild(elData);





}









// show index of object[p0ol/ll]


