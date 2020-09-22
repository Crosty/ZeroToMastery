// Declaration
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var myList = document.querySelectorAll("li");

//Delete button on current item list
for(var i = 0; i < myList.length; i++)
{
	var delBtn = document.createElement("button");
	delBtn.className = "deleteButton";
	var txtBtn = document.createTextNode("Delete");
	delBtn.appendChild(txtBtn);
	myList[i].appendChild(delBtn);
}

// Functions
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// Delete buttons on new item list
	var delBtn = document.createElement("button");
	delBtn.className = "deleteButton";
	var txtBtn = document.createTextNode("Delete");
	delBtn.appendChild(txtBtn);
	li.appendChild(delBtn);

	var newItem = document.querySelectorAll("li");
	var removeItem = newItem.length - 1;
	document.querySelectorAll(".deleteButton")[removeItem].addEventListener("click", deleteItem);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneOrUndone(event) {
	event.target.classList.toggle("done");
}

function deleteItem() {
	var delItem = event.target;
	var item = event.target.parentElement;
	var itemList = item.parentElement;

	itemList.removeChild(item);
}

// Invoking

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", doneOrUndone);

for(i = 0; i < myList.length; i++)
{
	document.querySelectorAll(".deleteButton")[i].addEventListener("click", deleteItem);
}