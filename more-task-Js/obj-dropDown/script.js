/**
 * we will be given a list of objects like  these: 
 * [{ a: 12, b: 15, c: 25 },{ a: 22, b: 17, d: 27 },{ a: 12, b: 35, c: 29, d: 32 }].
 *  And you have to create a dropdown with a key as a label and its corresponding values 
 * as the elements in the dropdown. And you have to avoid the duplicate values in the 
 * dropdown. For e. g: for the label "a" the dropdown will contain 12,22 as the values.
 *  After that when the user selects something from the dropdown you should filter the
 *  objects from the list of objects given at first. For example, if the user selects the 
 * label "a" with the value of 12 then you should display 
 * { a: 12, b: 15, c: 25 },{ a: 12, b: 35, c: 29, d: 32 }.
 */



 var data = [
    {
      id: "america",
      label: "America",
      
    },
    {
      id: "asia",
      label: "Asia",
   
    },
    {
      id: "europe",
      label: "Europe",
   
    }
  ];
  
  var mySelect = document.getElementById("selectParent");
  data.forEach(item => {
    selectParent.innerHTML += `<option id="${item.id}" value="${item.id}">${item.label} kkk i</option`;
  });
  
  mySelect.addEventListener('change', function(){
    handleChange();
  });
  
  function handleChange() {
  
   
  }
  