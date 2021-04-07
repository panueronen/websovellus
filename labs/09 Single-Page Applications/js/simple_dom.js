//console.log('page loaded');

console.log(document);


document.querySelector('#userForm input[type="email"]').onkeyup = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};
document.querySelector('#userForm input[type="text"]').onkeyup = function(){
	var name = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = name;
}
document.querySelector('#userForm input[type="password"]').onkeyup = function () {
	var password = document.querySelector('#userForm input[type="password"]');
	var paragraphs = document.querySelectorAll('#summary p');
	paragraphs[1].innerHTML = password.value;
}
