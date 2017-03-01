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

////////////
hover , click 

hover over, use css
<style>
div:hover {
             outline: 1px solid blue;
          }
</style>


get the id of the object being clicked.

	$(document).ready(function() {
    $("div").hover(function(event) {
        //alert(event.target.id);
		console.log(event.target.id);
    });
	
	$("classNameofDiv").click(function() {
        var contentPanelId = $(this).attr("id");
       alert(contentPanelId);
    });


