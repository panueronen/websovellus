var notes = new Array();
'use strict';
loadList();
function addItem() {
	let textbox;
	textbox = document.getElementById('item');
	var itemText = textbox.value;
	textbox.value = '';
	textbox.focus();
	var newItem = {title: itemText, quantity: 1};
	if (notes.some(e => e.title === newItem.title)) {
	    var index = notes.findIndex((obj => obj.title == newItem.title));
	    //notes.push(newItem);
		console.log(index);
		notes[index].quantity = notes[index].quantity +1;
		console.log('contains');
	} else {
		notes.push(newItem);
	}
	displayList();
	saveList();
}

function displayList() {
	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i = 0; i < notes.length; i++) {
		var node = undefined;
		var note = notes[i];
		var node = document.createElement('tr');
		var html = '<td>' + note.title + '</td><td>' + note.quantity + '</td><td><a href="#" onClick="deleteIndex(' + i + ')">delete</td>';
		node.innerHTML = html;
		table.appendChild(node);
	}
}

function deleteIndex(i) {
	notes.splice(i, 1);
	displayList();
	saveList();
}
function saveList() {
	localStorage.notes = JSON.stringify(notes);
}

function loadList() {
	console.log('loadList');
	if (localStorage.notes) {
		notes = JSON.parse(localStorage.notes);
		displayList();
	}
}

let button;
button = document.getElementById('add');
button.onclick = addItem;