var map, infoWindow, pos;


if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(function(position){

		pos={
			lat: 	position.coords.latitude,
			lng: 	position.coords.longitude
		}

		initMap();

	})
} else {

	//alert("Tu navegador no soporta GeoLocalizacion")
}

function initMap(){
	var demoCentro={lat: -34.397, lng: 150.644};
	var mapContainer=document.getElementById('map');
	var config= {
			center: demoCentro,
			zoom:4
	};

	map = new google.maps.Map(mapContainer,config);
	infoWindow= new google.maps.InfoWindow({map : map})

map.setCenter(pos);
map.setZoom(17);
infoWindow.setPosition(pos);
		infoWindow.setContent("ANDES");


}


var button= document.getElementById("btn-geo");

button.addEventListener("click",function(){

		//alert("se buscara tu posicion en el mapa");
		map.setCenter(pos);
		map.setZoom(17);
		infoWindow.setPosition(pos);
		infoWindow.setContent("ANDES");

});



