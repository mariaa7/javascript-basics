// Single line JavaScript comment

/* 	
	Multi-line
	Javascript 
	Comment
*/
"use strict";

var person = {
	fName: 'Maria',
	lName: 'Alberts',
	email: 'mariaa7@uw.edu',
	getFullName: function() { return this.fName + ' ' + this.lName; }
};

console.log('running the getFullName function on person object');
console.log(person.getFullName());

console.log('looping through all properties of the person object');
for (var prop in person) {
	console.log(person[prop]);
}

var elem = document.createElement('img');
elem.src = 'img/dog.jpg';
elem.alt = 'picture of my awesome, amazing dog';

//add this element to the top of the body
document.body.insertBefore(elem, document.body.firstChild);

var kitty = document.createElement('img');
kitty.src = 'img/cat.jpg';
kitty.alt = 'picture of a cool cat';

//add this to the body of the page
document.body.appendChild(kitty);