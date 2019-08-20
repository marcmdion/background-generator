var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");
var color11;
var color22;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//adding this calls the setGradient function right away
setGradient();

//random colors
button.addEventListener("click", randomColor);

function randomColor()
{	
     color11='rgb('+Math.round(Math.random()*255)+','
     +Math.round(Math.random()*255)+','
     +Math.round(Math.random()*255)+')';
     console.log (color11);

     color22='rgb('+Math.round(Math.random()*255)+','
     +Math.round(Math.random()*255)+','
     +Math.round(Math.random()*255)+')';
     console.log (color22);

     body.style.background = 
	"linear-gradient(to right, " 
	+ color11 
	+ ", " 
	+ color22 
	+ ")";

	css.textContent = body.style.background + ";";
     

} 

