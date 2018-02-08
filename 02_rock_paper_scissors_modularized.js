// The buttons
var buttons = document.getElementsByClassName("button"); // returning an array
for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', play);
}
// Variables for display purposes
var playerChoiceDisplay = document.getElementById("player_choice"); // display player's choice
var computerChoiceDisplay = document.getElementById("computer_choice"); // display computer's choice
var resultDisplay = document.getElementById("result"); // display the game result

// other global variables
var computerChoice;
var userChoice;

// main function containing the game logic
function play(){
	//this in a js function context (!) can reffer to the current owner of the event
	userChoice = this.id; // registering the buttons id!//the btn that is triggering the func become this.id0.
	computerInput();
	compare();
	display();	
}

function computerInput(){
	'use strict';

	switch(Math.floor(Math.random()*3)){      //returns a whole number between 0-2
		
		case 0:
			computerChoice = "Rock";
			break; //code stopsexecuting when right
		case 1:
			computerChoice = "Paper";
			break;
		case 2:
			computerChoice = "Scissors";
		
		}
			console.log(computerChoice);
	}
	
function compare(){
	
	//game is  a draw
	if(userChoice === computerChoice){
		resultDisplay.innerHTML = 'Game is a draw biAtch, pleaseeee';
		//all posibilities
		} else if(userChoice === 'Paper' && computerChoice = 'Rock'){
			resultDisplay.innerHTML = 'You win!!!';
		} else if(userChoice === 'Paper' && computerChoice = 'Scissors'){
			resultDisplay.innerHTML = 'You loose!!!';
		} else if(userChoice === 'Scissors' && computerChoice = 'Rock'){
				resultDisplay.innerHTML = 'You loose!!!';
		} else if(userChoice === 'Scissors' && computerChoice = 'Paper'){
				resultDisplay.innerHTML = 'You win!!!';
		} else if(userChoice === 'Rock' && computerChoice = 'Scissors'){
				resultDisplay.innerHTML = 'You win!!!';
		} else (userChoice === 'Rock' && computerChoice = 'Paper'){
				resultDisplay.innerHTML = 'You loose!!!';
	}	
	
function display(){
	//to make user and computer choise visible
	playerChoiceDisplay.innerHTML = userChoice;
	computerChoiceDisplay.innerHTML = computerChoice;
	
	}	
	