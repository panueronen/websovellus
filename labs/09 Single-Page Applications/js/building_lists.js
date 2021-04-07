
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement('ul');
for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var item = document.createElement('li');
	item.innerHTML = books[i].title + ' ' + books[i].year;
	list.appendChild(item);
}
document.body.appendChild(list);


function createtablehead(table, data){
	let thead = table.createTHead();
	let row = thead.insertRow();
	for(let key of data){
		let th = document.createElement('th');
		let text = document.createTextNode(key);
		th.appendChild(text);
		row.appendChild(th);
	}
}
function generateTable(table,data){
	for(let element of data){
		let row = table.insertRow();
		for(key in element){
			let cell = row.insertCell();
			let text = document.createTextNode(element[key]);
			cell.appendChild(text);
		}
	}
}
let table = document.createElement('table');
let dataa = Object.keys(books[0]);
createtablehead(table,dataa);
generateTable(table, books);
document.body.appendChild(table);

/*

document.querySelectorAll('tr').onclick = function () {
	console.log('doing stuff');
	document.getElementById('book').innerHTML = document.querySelector('tr').firstChild.value;
}


couldn't figure out a way to get this to work :/
*/