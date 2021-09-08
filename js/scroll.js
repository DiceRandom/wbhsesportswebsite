var isAtTop = null;
   var element,arrayOfText;
   window.onload = function(event) {
   	element = document.getElementById("navbar");
   
   	    	element.style.backgroundColor  = "rgba(0, 0, 0, 0)";
   	    	element.style.color  = "white";
   	    	isAtTop = true;
   	window.addEventListener("scroll", function (event) {
   	    var scroll = this.scrollY;
   	    console.log(scroll)
   	    if(scroll == 0){
   	    	element.style.backgroundColor  = "rgba(0, 0, 0, 0)";
   	    	element.style.color  = "white";
   	    	isAtTop = true;
   	    }else{
   	    	element.style.backgroundColor  = "rgba(255, 255, 255, 1)";
   	    	element.style.color  = "gray";
   	    	isAtTop = false;
   	    }	
   	});
   }