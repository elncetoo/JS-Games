//global varaiables
	var number1 = 1;
	var number2 = 11;
	var output = document.getElementById("output");

	//regular function with a return value
	function add() {
		'use strict';
		//local var
		var result = number1 + number2;
		return result;

	}
	console.log(add()); //returns the value

	//ECMA 6 arrow function, with multiple statements u need to include the function body {}
	var result = () => number1 + number2;//=> is replacing the whole function content
	console.log(result()); //because var result is now serving as a function


	//function with user input
	function userInput() {
		'use strict';
	//let is restricting the scope to the acatual code statemnt code block statement or expression
		let number1 = parseInt(prompt('Type a number:', ''));//to capture user input-call the prompt method(srgiments-text displayed,epmpy space foruser input)
		let number2 = parseInt(prompt('Type a number:', ''));
		let result = number1 + number2;
		
		//rendering the result

		output.innerHTML = 'The result is: ' + result + '!';
	}

	//userInput();
	//when we get null means object does not exist

//constructor function
function player(name, score){
	'use strict';
	this.name = name;
	this.score = score;

	this.greeting = function(){
		alert("Hi "+this.name+'score is '+ this.score);
	}
}

var myPlayer = new player ('Peter', '55');
myPlayer.greeting();