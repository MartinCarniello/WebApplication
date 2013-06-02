/**
 * @author Martin
 */

function change() {

	var newChild = document.createElement("p");
	newChild.innerHTML = "New Child";
	var div = document.getElementById("changeButton");
	
	newChild.setAttribute("class", "hotel");
	
	div.appendChild(newChild)
}

function getName() {
	
	var name = document.getElementById("getName").value;
	
	var val = confirm("Is " + name + " your name?");
	
	if(!val) {
		
		var newChild = document.createElement("p");
		newChild.innerHTML = "You are disgusting";
		
		document.getElementById("changeButton").appendChild(newChild);
	}
}

function alertButton() {
	
	alert("Warning");
}

function getJson(json) {
	
	var request = new XMLHttpRequest();
	
	if(request) {
		
		request.open("GET", json);
		
		request.onreadystatechange = function() {
			
			if(request.readyState == 4 && request.status == 200) {
				
				displayJson(request.responseText);
			}
		}
	}
	
	request.send(null);
}

function setInnerHTML(htmlElement, text) {
	
	htmlElement.innerHTML = text
}

function displayJson(json) {

	var parsedJson = JSON.parse(json);
	
	var elementToRender = document.getElementById('hotels');
	
	for(var i = 0; i < parsedJson.hotels.length; i++) {
		
		elementToRender.appendChild(document.createElement("div")).appendChild(document.createElement("p")).innerHTML = "name: " + parsedJson.hotels[i].name;
		elementToRender.appendChild(document.createElement("div")).appendChild(document.createElement("p")).innerHTML = "rooms: " + parsedJson.hotels[i].rooms;
		elementToRender.appendChild(document.createElement("div")).appendChild(document.createElement("p")).innerHTML = "stars: " + parsedJson.hotels[i].stars;
	    elementToRender.appendChild(document.createElement("div")).appendChild(document.createElement("p")).innerHTML = "mts: " + parsedJson.hotels[i].mts;
	};
}
