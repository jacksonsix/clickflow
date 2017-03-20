
var KEYCODE_ESC = 27;

$('body').on('keyup',function(e){
	  
      if(e.which=== KEYCODE_ESC){
          console.log('esc');
      }
});


// operations on data

function center(object){
	// calculate center
	
	return  new Point(1,2);
}

function linepoints(start,end){
	// from 2 center, calculate line, cross the circle bound. 
	return {n1: new Point(1,2), n2: new Point(3,4)};
}

//

function Point(x,y){
	this.type = "Point";
	this.x = x;
	this.y = y;
}

function Arrow(start,end){
	
	
}

function Circe(x,y){
	this.type="Circe";
	this.center =  new Point(x,y);
	
}

//// upper part will be use later


var container = function(){
	return {
		nodes: [],
		arrows: []
	};
}();


function getNode(){
  var object ={};
  container.nodes.push(object);
  object.coming=[];
  object.going =[];
  return object; 
   
}

function getArrow(){
  var object ={};
  container.arrows.push(object);
  object.coming=[];
  object.going =[];
  return object; 
   
}

