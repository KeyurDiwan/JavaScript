/**

 */

 var providersJSON = {"providers": [


  {
    "state": "A",
    "num":[ 
      {
        "obj": {
        a: 12, b: 35, c: 29, d: 32}
      
      }
    ]
  },
  {
    "state": "B",
    "num":[
    {
      "obj": {
      a: 10, b: 30, c: 25}
    
    }
    ]
  },

  {
    "state": "C",
    "num":[ 
      {
        "obj": {
        a: 1, b: 5, c: 21}
      
      }
    ]
  },
  
  
]};

var providers = providersJSON.providers;

// console.log(providers[2].num[0].obj.a);

//--------------------------//
var div = document.getElementById("container");
var option0 = document.createElement("option");
option0.text = "";
option0.value = "";
var states = document.getElementById("states");
states.appendChild(option0);


for(var i = 0; i < providers.length; i++) {
  var option = document.createElement("option");
  option.text = providers[i].state;
  option.value = providers[i].state;
  states.appendChild(option);
}

states.onchange = function(e) {
  e.preventDefault();
  var selected = this.value
  if (selected !== ""){
    console.log(showNum(selected));
  } else {
    console.log("Back to square one.")
  }
}

function showNum(selected) {
  for (var i = 0; i < providers.length; i++) {
    if (providers[i].state == selected) {
      var num = providers[i].num;
      div.innerHTML = "";
      for(var n = 0; n < num.length; n++){
        var p = document.createElement("p");
        // console.log(num[n].obj)
       
        var text = document.createTextNode( "a:" + num[n].obj.a + " b:" + num[n].obj.b + " c:" + num[n].obj.c)
        p.appendChild(text);
        div.appendChild(p);
      }
    }
  }
}