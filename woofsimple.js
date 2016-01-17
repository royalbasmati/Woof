// The WoofWooof Game

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

var TheNorth = new Location("You are in the North.",[o_MOVE],[o_Pebble],[o_Moe],undefined,TheCenter,undefined,undefined);
var TheSouth = new Location("You are in the South.",[o_MOVE],[o_Pebble],[o_Moe],TheCenter,undefined,undefined,undefined);
var TheEast = new Location("You are in the East.",[o_MOVE],[o_Cellphone],[o_Xanthippe],undefined,undefined,undefined,TheCenter);
var TheWest = new Location("You are in the West.",[o_MOVE],[o_Cellphone],[o_Xanthippe],undefined,undefined,TheCenter,undefined);
var TheCenter = new Location("You are in the Center.",[o_MOVE],[o_Cellphone],[o_Xanthippe],TheNorth,TheSouth,TheEast,TheWest);

console.log(TheCenter.N + " 1st Log");
console.log(TheCenter + " A Log");

// defining the main Character object 

var mainCharacter = {
	name : undefined,
	location : TheCenter,
	direction : undefined,

// mainCharacter Object methods

// the getcurrentlocation method checks the main Character's current location and 
// returns the appropriate prompt for their current location
	getCurrentLocation : 
		function() {
			MClocationdescription = this.location.description;
			document.getElementById('mainInput').value = "";	
			document.getElementById("textoutput1").innerHTML = MClocationdescription;
			document.getElementById("textoutput2").innerHTML = "You can move either North, South, East, or West.";
			document.getElementById("textoutput3").innerHTML = "";
			document.getElementById("textoutput4").innerHTML = "";
			takeAction();
			}
};

function takeAction() {
	var button = document.getElementById('mainInputButton');
	button.onclick = function() {
		var newAction = document.getElementById('mainInput').value;
		switch (newAction) {
		case "North" : case "NORTH" : case "north" : case "N" : case "n" :
		console.log(TheCenter.North + " 2nd Log");
		console.log(TheCenter + " B Log");
		mainCharacter.location = mainCharacter.location.North;
		console.log(TheCenter.North + " 3rd Log");
		console.log(TheCenter + " C Log");
		break;
		case "South" : case "SOUTH" : case "south" : case "S" : case "s" :
		mainCharacter.location = mainCharacter.location.South;
		break;
		case "East" : case "EAST" : case "east" : case "E" : case "e" :
		mainCharacter.location = mainCharacter.location.East;
		break;
		case "West" : case "WEST" : case "west" : case "W" : case "w" :
		mainCharacter.location = mainCharacter.location.West;
		break;
		mainCharacter.getCurrentLocation();
		case "EXIT" : case "exit" : case "Exit" : break;
		default : "Please type NORTH, SOUTH, EAST or WEST - or EXIT to leave the game.";	
		}
	}
};

function newGame1() {
	document.getElementById("textoutput1").innerHTML = "Hello and welcome to the WoofWoof Game! What is your name?";
	var userName = document.getElementById('mainInput');
	var button = document.getElementById('mainInputButton');
	button.onclick = function() {
		mainCharacter.name = userName;
		mainCharacter.location = TheCenter;
		var uname = document.getElementById('mainInput').value;
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

//invoking a new instance of the game
newGame1();
