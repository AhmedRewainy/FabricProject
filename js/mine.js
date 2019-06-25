  var canvas = this.__canvas = new fabric.Canvas('c');
	
	canvas.setWidth(window.innerWidth)
	canvas.setHeight("500")
	
	

 
  

$("#btnCircle").click(function(){
	
	var left = Math.random()*window.innerWidth;
	var top = Math.random()*500;
	var colors = ["orange" , "#09c" , "teal" , "tomato"];
	var ind  = Math.floor( Math.random()*colors.length);
	var circle = new fabric.Circle({
    radius: 30, left: left, top: top, fill:colors[ind] 
  });

  canvas.add(circle);
 
})




