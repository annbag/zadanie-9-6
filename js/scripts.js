/*
function checkOnClickEvent (param) {

	console.log(param);*/

 var list = document.getElementById ('list');
 var add = document.getElementById ('addElement'); //  var add = document.getElementTagName ('button');
 

 add.addEventListener('click', function() {
 	var element = document.createElement('li')	
 	var liElement = list.getElementsByTagName('li') 

	element.innerHTML = 'item' + ' ' + liElement.length;

list.appendChild(element);
});

  	