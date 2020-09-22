var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")";
	// Shows the newly set gradient property
	css.textContent = body.style.background + ";";

	// Shows current gradient property
	css.innerHTML = body.style.background + ";";
}

// Generates the random color
function randomColorGenerator() {
	var letters = "0123456789ABCDEF";
	var color = "#";

	for(var i = 0; i < 6; i++)
	{
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Applies the color to the page
function colorGenerator() {
	var _color1 = randomColorGenerator();
	var _color2 = randomColorGenerator();

	body.style.background = "linear-gradient(to right, " + _color1 + ", " + _color2 + ")";

	css.textContent = body.style.background + ";";
}


// Sets the color to the startup pageload
color1.addEventListener("input", setGradient());

color2.addEventListener("input", setGradient());

// Set the color that is specified after change of color
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);