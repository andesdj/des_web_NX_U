var libros={
	"libros": [
        {
            "codigo": "085AND2001",
            "titulo":"Hamlet el Principe de Dinamarca",
            "editorial":"Princeton",
            "fecha_publicacion": "01/01/1985",
            "edicion": "Tercera",
            "estado": "Prestado",
            "numero_paginas":"390",
            "numero_copias":"20",
            "autores": [
                {
                    "nombre":"William Shakespeare",
                    "fecha_nacimiento":"04/04/1530",
                    "nacionalidad":"Inglaterra"                
                }
            ]
        },
        
            {
            "codigo": "0R20458RADS",
            "titulo":"El Perfume- Historia de un asesino",
            "editorial":" Norma",
            "fecha_publicacion": "30/08/1995",
            "edicion": "Primera",
            "estado": "Disponible",
            "numero_paginas":"247",
            "numero_copias":"30",
            "autores": [
                {
                    "nombre":"Patrick Suskind",
                    "fecha_nacimiento":"01/12/1944",
                    "nacionalidad":"Alemania"                
                },
                
                 {
                    "nombre":"Kristen Neville",
                    "fecha_nacimiento":"01/12/1968",
                    "nacionalidad":"Dinamarca"   
                    
                }
            ]
        },
        
                    {
            "codigo": "0RV55217GER",
            "titulo":"El extraño caso de Dr. Jekyll & Mr Hyde",
            "editorial":"Longman",
            "fecha_publicacion": "16/04/1945",
            "edicion": "Segunda",
            "estado": "Prestado",
            "numero_paginas":"451",
            "numero_copias":"15",
            "autores": [
                {
                    "nombre":"Robert Louis Stevenson",
                    "fecha_nacimiento":"14/07/1922",
                    "nacionalidad":"Reino Unido"                
                },
                
                {
                    "nombre":"Oliver Thomasson",
                    "fecha_nacimiento":"01/12/1968",
                    "nacionalidad":"Dinamarca"   
                    
                }
            ]
        }
    ]
}

function ver(){
	alert("El Libro "+ libros.libros[0].titulo +" Tiene el Codigo: " + libros.libros[0].codigo +" Y fue Publicado el. "+libros.libros[0].fecha_publicacion);

}


var positionInfo;
function geo(){

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){

			 positionInfo=position;
			console.log(positionInfo);
		})

	}
	else {
		alert("El navegador no soporta posicionamiento HTML5");
	}
}

geo();
