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

var pup = document.createElement('img');
pup.src = 'img/dog.jpg';
pup.alt = 'picture of my awesome, amazing dog';

//add this element to the top of the body
document.body.insertBefore(pup, document.body.firstChild);

var kitty = document.createElement('img');
kitty.src = 'img/cat.jpg';
kitty.alt = 'picture of a cool cat';

//add this to the body of the page
document.body.appendChild(kitty);

function onPuppyClick() {
	//alert('you clicked my puppy!');
	document.getElementById('bark').play();
}

//selecting the puppy-pic element
var elem = document.getElementById('puppy-pic');

if (elem.addEventListener) {
	elem.addEventListener('click', onPuppyClick);
}
else if (elem.attachEvent) {
	elem.attachEvent('click', onPuppyClick);
}

document.addEventListener('DOMContentLoaded', function() {
	alert("The DOM is ready");
});