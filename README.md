# clickflow

In HTML5, drag and drop is part of the standard: Any element can be draggable.

Make an Element Draggable,  <img draggable="true">



Create Element  in HTML

function addElement () { 
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}



<!DOCTYPE html>
<html>
<body>

<p>Click the button to make a BUTTON element.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    var btn = document.createElement("BUTTON");
    document.body.appendChild(btn);
}
</script>

</body>
</html>
