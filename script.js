var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	createCrossOut(li);
	var del = document.createElement("button");
	del.appendChild(document.createTextNode("Delete"));
	li.appendChild(del);
	del.className = "deleteButton"
	createDeleteAction(del);
	input.value = "";
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

function createCrossOut(li) {
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	})
}

function createDeleteAction(del) {
	del.addEventListener("click", function() {
		del.parentElement.remove();
	})
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);