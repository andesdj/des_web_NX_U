function cambiarColor(objetoDOM){
	
	objetoDOM.children.style.background="#4d62d0";
	if(objetoDOM.children[0]){
		objetoDOM.children[0].style.background="inherit";
	}
}

function cambiarColor2(objetoDOM){
	color="#149cf5";
	objetoDOM.children.style.background=color;
	if(objetoDOM.children[0]){
		objetoDOM.children[0].style.background="inherit";
	}
}


function cambiarPanel(elemento){

	var j= document.querySelectorAll("[class^='item-']");

	for (var i=0; i<j.length;i++){
		j[i].style.width="4%";
		j[i].style.background="#4d62d0";
	}


	for (var k = 0; k < document.querySelectorAll("[class^='item-'] *").length; k++) {
			k.style.display="none";
			elemento.style.width="96%";
			elemento.style.background="white";
		}
	for (var l;l<elemento.length;l++){
		elemento.children[l].style.display="block";
	}

}


function ancho18(elemento){
	elemento.style.width="18%";
}

function ancho20(elemento){
	elemento.style.width="20%";
}



function letraSmall(){

document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize="small";
document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize="small";
document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize="small";

}

function letraLarge(){

document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize="xx-large";
document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize="xx-large";
document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize="xx-large";

}


// -----------------------Leccion 3

function soundOff(){
var s=document.getElementById('speaker-radio').checked=false;
document.querySelector(".audio img").setAttribute("src","img/mute.png")
}

function soundOn(){

var s=document.getElementById('speaker-radio').checked=true;
document.querySelector(".audio img").setAttribute("src","img/speaker.png")	
}


function saludo(){
	var nombreUsu=document.getElementsByName("nombre")[0].value;
	var nuevoS=document.createElement('H2');
	var contenidoS=document.createTextNode('Bienvenido' +nombreUsu);
	nuevoS.appendChild(contenidoS);
	document.getElementsByClassName('container-saludo')[0].appendChild(nuevoS);
}


function crearParrafo(elemento){
	var nuevoParrafo=document.createElement('p');
	var contenido=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt");
	nuevoParrafo.appendChild(contenido);
	elemento.appendChild(nuevoParrafo);

}


function modificaParrafo(elemento,caracteres){

	elemento.innerHTML=caracteres;



}