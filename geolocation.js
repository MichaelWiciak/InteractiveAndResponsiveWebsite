function geolocation() {
	var x = document.getElementById("location");
	var n = localStorage.getItem('locationData')
	var showingAlready = localStorage.getItem('showingLocation');
	if (x.innerHTML==n && showingAlready=="y"){
		localStorage.removeItem("showingLocation");
	}
	if (x.innerHTML=="No Geolocation Data saved"){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
			function showPosition(position) {
				x.innerHTML = "<p>Latitude: " + position.coords.latitude + "<br>" +
					"Longitude: " + position.coords.longitude + "</p>";
				localStorage.setItem('locationData', x.innerHTML);
				}
		}
		else {
			x.innerHTML = "Geolocation is not supported by this browser.";
		}
	}
	else if (x.innerHTML!="Geolocation is not supported by this browser.") {
		var n = localStorage.getItem('showingLocation');
		if (n==null){
			x.innerHTML = x.innerHTML +
				"<em> Already showing location </em> <br>";
			localStorage.setItem('showingLocation', "y");
		}
	}
}

function loadLocation() {
	var n = localStorage.getItem('locationData');
	if (n!=null){
		var x = document.getElementById("location");
		if (x!=null){
			x.innerHTML = n;
		}
	}
}

function resetLocation(){
	localStorage.removeItem("locationData");
	localStorage.removeItem("showingLocation");
	var x = document.getElementById("location");
	x.innerHTML="No Geolocation Data saved";
}

loadLocation();
