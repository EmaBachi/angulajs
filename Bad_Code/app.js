//Create an entity student with some field
var student = {
  name = "",
  type = "student"
};

//add to page on content loaded lister.
document.addEventListener('DOMContentLoaded', contentLoaded);

//this is the function invoked when the listener above give a true result
//the function fetch the element specified with the id and add to it a listener
function contentLoaded(event) {
  document.getElementById('name').addEventListener('keyup', keyup);
}

function keyup(event){
  calculateNumericOutput();
}

function calculateNumericOutput() {
  student.name = document.getElementById('name').value;

  var totalNameValue = 0;
  for(var i = 0; i < student.name.length; i++){
    totalNameValue += student.name.charCodeAt(i);
  }

  //now we insert the result int the html page
  var output = "Total numeric value of person's name is "+totalNameValue;
  document.getElementById('output').innerText = output;
  
}
