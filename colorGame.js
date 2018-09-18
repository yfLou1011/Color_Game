var numofSquares = 6;
var colors = getRandomColors(numofSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var h1Color = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numofSquares = 3;
	colors = getRandomColors(numofSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numofSquares = 6;
	colors = getRandomColors(numofSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		//squares[i].style.display = "block";
	}
});

resetBtn.addEventListener("click", function(){
	colors = getRandomColors(numofSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1Color.style.background = "steelblue";
	messageDisplay.textContent = "";
});

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor =  this.style.background;
		//console.log(clickedColor);
		if(clickedColor === pickedColor){
			changeColors(clickedColor);
			messageDisplay.textContent = 'Correct!';
			h1Color.style.background = clickedColor;
			resetBtn.textContent = "Play Again?";
		}else{
			this.style.background = "#323232";
			messageDisplay.textContent = 'Try Again';
		}
	});
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor() {
	// body...
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];	
}

function getRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr; 
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}








