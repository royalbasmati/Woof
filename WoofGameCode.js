// The WoofWoof Game

// Initialize all the main variables

// defining the main Character object 
var mainCharacter = {
	name : undefined,
	whereYouAre : TheCenter,
	direction : undefined},

// setting all the location objects to their initial values
	TheNorth = new Location("You are in the North.",[o_MOVE],[o_Pebble],[o_Moe],undefined,TheCenter,undefined,undefined),
	TheSouth = new Location("You are in the South.",[o_MOVE],[o_Pebble],[o_Moe],TheCenter,TheCenter,undefined,undefined),
	TheEast = new Location("You are in the East.",[o_MOVE],[o_Cellphone],[o_Xanthippe],undefined,undefined,undefined,TheCenter),
	TheWest = new Location("You are in the West.",[o_MOVE],[o_Cellphone],[o_Xanthippe],undefined,undefined,TheCenter,undefined),
	TheCenter = new Location("You are in the Center.",[o_MOVE],[o_Cellphone],[o_Xanthippe],TheNorth,TheSouth,TheEast,TheWest),


;



// Initialize the game
If (stageOfGame === undefined) {
	// Game Flow Control Variable
	var stageOfGame = "needName"; // stages are needName, needToPlay, needAction, endOfGame

	document.getElementById("textoutput1").innerHTML = 
		"Hello and welcome to the WoofWoof Game! What is your name?";

	// Button Click and Text Input Function
	// Also need to add alternate input method of pressing return
	document.getElementById('mainInputButton').onclick = function() {
		processInput(document.getElementById('mainInput').value);	
	};
}


// Game Control Flow Function - uses input from the input box
var processInput = function(inputText) {
	switch(stageOfGame) {
		case	needName : needName(inputText)
							break;

		case	needToPlay 	:  inPlay(inputText)
								break;
		case	needAction 	:  processAction(inputText)
								break;
		case	endOfGame	:  endGame(inputText)
								break;
		default 			:  return "There was an error processing the stage of the game \n"+
										"in the processInput module."
	}
};

// the handler function for the "needName" stage of play near the beginning of the game
function needName(userName) {
		mainCharacter.name = userName;
		mainCharacter.location = TheCenter;
		document.getElementById("textoutput1").innerHTML = "Welcome " + uname + "!";
		document.getElementById("textoutput2").innerHTML =	"Your favorite dog WoofWoof has gone missing!";
		document.getElementById("textoutput3").innerHTML =	"Would you like to search for WoofWoof?";
		document.getElementById("textoutput4").innerHTML =	"Please type Yes or No!";
		document.getElementById("textoutput5").innerHTML =	"Or you can type EXIT at any time to exit the game.";
		document.getElementById('mainInput').value = "";
	newGame2();
	}
};

function newGame2() {
	var button = document.getElementById('mainInputButton');
	button.onclick = function() {
		var YesorNo = document.getElementById('mainInput').value;
		switch (YesorNo) {
		case "Yes" : case "yes" : case "Y" : case "y" : 
		document.getElementById("textoutput1").innerHTML = "Yay! Fantastic! Let's Get Started!";
		mainCharacter.getCurrentLocation();
		break;
		case "No" : case "no" : case "N" : case "n" : 
		document.getElementById("textoutput1").innerHTML = "WoofWoof will wait patiently for help."
		document.getElementById("textoutput2").innerHTML = "Goodbye for now!";
		document.getElementById("textoutput3").innerHTML = "";
		document.getElementById("textoutput4").innerHTML = "";
		break;
		case "EXIT" : case "exit" : case "Exit" : break;
		default : "Please type Yes or No! Or Exit to leave the game.";
		}
	}
};



// invoke the processInput function to start the game
processInput();

// Various objects to be used in the game

// Action objects
var o_MOVE = {};

// Item objects
var o_Pebble = {};
var o_Cellphone = {};

// People objects
var o_Moe = {};
var o_Xanthippe = {};

// Location Constructor Function
 function Location(description,actions,items,people,North,South,East,West) {
	this.description = description;
	this.actions = actions;
	this.items = items; 
	this.people = people;
	this.North = North; this.South = South; this.East = East; this.West = West;
};





// mainCharacter Object methods

// the getcurrentlocation method checks the main Character's current location and 
// returns the appropriate prompt for their current location
	getCurrentLocation : 
		function() {
			MClocationdescription = this.whereYouAre.description;
			document.getElementById('mainInput').value = "";	
			document.getElementById("textoutput1").innerHTML = MClocationdescription;
			document.getElementById("textoutput2").innerHTML = "You can move either North, South, East, or West.";
			document.getElementById("textoutput3").innerHTML = "";
			document.getElementById("textoutput4").innerHTML = "";
			moveSomewhere();
			}
};

console.log(mainCharacter.whereYouAre);

function moveSomewhere() {
	var button = document.getElementById('mainInputButton');
	button.onclick = function() {
		var newAction = document.getElementById('mainInput').value;
		switch (newAction) {
		case "North" : case "NORTH" : case "north" : case "N" : case "n" :
		if (mainCharacter.whereYouAre.North) {mainCharacter.whereYouAre = mainCharacter.whereYouAre.North;
		mainCharacter.getCurrentLocation();}
			else {alert("You can't go any further North from here!")};
		break;
		case "South" : case "SOUTH" : case "south" : case "S" : case "s" :
		if (mainCharacter.whereYouAre.South) {mainCharacter.whereYouAre = mainCharacter.whereYouAre.South;
		mainCharacter.getCurrentLocation();}
			else {alert("You can't go any further South from here!")};
		break;
		case "East" : case "EAST" : case "east" : case "E" : case "e" :
		if (mainCharacter.whereYouAre.East) {mainCharacter.whereYouAre = mainCharacter.whereYouAre.East;
		mainCharacter.getCurrentLocation();}
			else {alert("You can't go any further East from here!")};
		break;
		case "West" : case "WEST" : case "west" : case "W" : case "w" :
		if (mainCharacter.whereYouAre.West) {mainCharacter.whereYouAre = mainCharacter.whereYouAre.West;
		mainCharacter.getCurrentLocation();}
			else {alert("You can't go any further West from here!")};
		break;
		case "EXIT" : case "exit" : case "Exit" : 
			document.getElementById('mainInput').value = "";	
			document.getElementById("textoutput1").innerHTML = "The game is over!"
			document.getElementById("textoutput2").innerHTML = "Come back soon!";
			document.getElementById("textoutput3").innerHTML = "";
			document.getElementById("textoutput4").innerHTML = "";
			document.getElementById("textoutput4").innerHTML = "";
		break;
		default : "Please type NORTH, SOUTH, EAST or WEST - or EXIT to leave the game.";	
		}
	}
};



