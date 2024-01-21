var blueMassElement = document.getElementById("bluemass");
var documentHeight = document.documentElement.clientHeight;
var documentWidth = document.documentElement.clientWidth;

// Create the divs in here

var currentTop = Math.floor(Math.random() * documentHeight) + 1;
var currentLeft = Math.floor(Math.random() * documentWidth) + 1;

blueMassElement.style.top = currentTop + "px";
blueMassElement.style.left = currentLeft + "px";

