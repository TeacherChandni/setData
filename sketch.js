/*
DATABASE: plrName ""
elementId: initial
local variable Name //inputBoxName


*/
var inputBoxName,button

function setup(){


  inputBoxName = createInput('initial');

  button=createButton('Play');

  var database = firebase.database();

  var dbName= database.ref('plrName');
  
  button.mousePressed(submitName);

  function submitName(){
    var data = {
      plrName : inputBoxName.value()
    } 
    database.ref('plrName').set({
      plrName:inputBoxName.value()
       })
    //console.log(data);
    
   
  }
    
  
    
}
function draw(){

}