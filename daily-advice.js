#!/usr/local/bin/node

var d = new Date();
var time = d.getHours();
var day = d.getDay();
var month = d.getMonth();
var message = "";
//HARD MODE
var messageArray = ["Wear some sunscreen!", "Stay hydrated!", "Chill out!", "Wear deodorant!"];
var randomMessage = Math.floor(Math.random()*messageArray.length);


console.log("Hello! Here is some advice for the day:");

if (time >= 0 && time <= 7) {
	console.log("You should be sleeping.");
} else if (time > 7 && time <= 17) {
	console.log("You should be working.");
} else {
	console.log("You should be drinking.");
}

if (day >= 1 && day < 6) {
	console.log("You can make it.");
} else if (day === 6) {
	console.log("It's Friday!");
} else {
	console.log("It's the weekend!");
}

if ((month <= 11 && month >= 9) || (month >= 0 && month <= 4)) {
	if (time >= 18) {
		message += "It gets real cold at night!";
	} else if (time >= 6 && time < 10) {
		message += "You need some hot coffee to start the day.";
	} else {
		message += "Don't forget a jacket.";
	}
}

if (month > 4 && month < 9) {
	if (time >=18) {
		message += "Watch out for mosquitos!";
	} else if (time > 11 && time < 18) {
		message += messageArray[randomMessage]; //HARD MODE
	} else {
		message += "Stay cool out there!";
	}
}


console.log(message);