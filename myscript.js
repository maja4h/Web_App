//My javascript script
//starting the weather choice script
const select = document.querySelector("select");
const par = document.querySelector("p");

//event for calling the settingWeather function changing the weather choice
select.addEventListener("change", settingWeather);

//settingWeather function
function settingWeather() {
	const choice = select.value;
	
	//adding the choices
	//sunny choice
	if (choice == "sunny") {
		par.textContent = "Sunny weather is definitely good, how about going outside and exploring the nearby area. Definitely check out the Nice Day Idea section :)";
	}
	//warm choice
	else if (choice == "warm") {
		par.textContent = "The weather is warm AND sunny, wow sounds lovely, how about a beach day?";
	}
	//rainy choice
	else if (choice == "rainy") {
		par.textContent = "A bit rainy huh? Might not want to go outside... then maybe have fun at home, check out the Gloomy Day Idea section.";
	}
	else{
		par.textContent = "";
	}
}