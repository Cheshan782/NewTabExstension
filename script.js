var blueMassElement = document.getElementById("bluemass");
var documentHeight = document.documentElement.clientHeight;
var documentWidth = document.documentElement.clientWidth;

// Create the divs in here

var currentTop = Math.floor(Math.random() * documentHeight) + 1;
var currentLeft = Math.floor(Math.random() * documentWidth) + 1;

blueMassElement.style.top = currentTop + "px";
blueMassElement.style.left = currentLeft + "px";

const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e8b1e0089mshc1cdd42625920fcp1664b8jsn0e118e27aa4c',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}