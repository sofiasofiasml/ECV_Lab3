ubi = [4.639386,-74.082412]; 
var  myLating; 
var loca = []; 
var room= '0'; 

oneCoile = true; 
let map = L.map('map').setView(ubi,6)
getPosition(); 

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 
	maxZoom: 5,
}).addTo(map);


function getPosition() {
	
	if(navigator.geolocation){
		var options = {timeout: 60000}; 
		geoLoc = navigator.geolocation; 
		watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler, options); 
	}else{
		alert("Lo sentimos, no soporta geolocalizacion"); 
	}
}
function showLocationOnMap(position)
{
	var latitud = position.coords.latitude; 
	var longitud = position.coords.longitude; 
	console.log("Latitud: "+latitud+" Longitud: "+longitud); 
	
	myLating = {lat:latitud, lng:longitud}; 
	loca = [latitud, longitud]

	 		if(oneCoile){
				L.Routing.control({
					waypoints: [
					L.latLng(loca),
					//paris
					L.latLng(48.51, 2.21)
					],
					language: 'es',
				}).addTo(map);

				L.Routing.control({
					waypoints: [
					L.latLng(loca),
					//roma
					L.latLng(41.89, 12.49)
					], 
					language: 'es',
				}).addTo(map);

				L.Routing.control({
					waypoints: [
					L.latLng(loca),
					//egipto
					L.latLng(26.82,30.80)
					],
					language: 'es',
				}).addTo(map);
			 	oneCoile= false; 		

	 }

	//Marker
	 L.marker(myLating).addTo(map)
	 
	
}

function showLocationError()
{
	var latitud = 41.38; 
	var longitud = 2.169; 
	console.log("Latitud: "+latitud+" Longitud: "+longitud); 
	
	myLating = {lat:latitud, lng:longitud}; 
	loca = [latitud, longitud]

	 		if(oneCoile){
				L.Routing.control({
					waypoints: [
					L.latLng(loca),
					//paris
					L.latLng(48.51, 2.21)
					],
					language: 'es',
				}).addTo(map);

				L.Routing.control({
					waypoints: [
					L.latLng(loca),
					//roma
					L.latLng(41.89, 12.49)
					], 
					language: 'es',
				}).addTo(map);

				L.Routing.control({
					waypoints: [
					L.latLng(loca),
					//egipto
					L.latLng(26.82,30.80)
					],
					language: 'es',
				}).addTo(map);
			 	oneCoile= false; 		

	 }

	//Marker
	 L.marker(myLating).addTo(map)
	 
	
}

function errorHandler(err)
{
	if(err.code == 1)
	{
		alert("Error:aceso denegado!"); 
	}else if(err.code == 2){
		//alert("Error: Position no existe o no se encuentra!"); 
		showLocationError(); 
	}
	
}
	
	
	