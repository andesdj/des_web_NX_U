
var formRegistro = document.getElementsByClassName('registro')[0],
    formReserva  = document.getElementsByClassName('reserva')[0];

// Almacenamos el objeto localStorage en una variable
var Storage = window.localStorage
// Verificar si localStorage tiene alguna
if (Storage.length > 0 && Storage.hasOwnProperty('usuario')) {
  // Si la llave usuario existe en localStorage mostrar el formulario de reserva
  formReserva.className = "reserva"
  formRegistro.className = "registro hide"
} else {
  // Si no existe se debe mostrar el formulario de regisro
  formRegistro.className = "registro"
  formReserva.className += "reserva hide"
}


var botonRegistro = document.getElementById('registrar'),
    botonReserva  = document.getElementById('reservar')
    inputDocumento = document.getElementById('numDocRes');

botonRegistro.addEventListener('click', function(e) {
  abc();
  e.preventDefault()

})

botonReserva.addEventListener('click', function(e) {
  e.preventDefault()

})

inputDocumento.addEventListener('keypress', function(e) {
  if (e.which === 13) {

  }
})



var usuario =new Object();
var g= new Array();
var ant;
function abc(){
  usuario.numDoc=document.getElementById('numDoc').value;
  usuario.nombreCom=document.getElementById('nombreCom').value;
  usuario.correo=document.getElementById('correo').value;
  usuario.nombreUsuario=document.getElementById('nombreUsuario').value;
  usuario.password=document.getElementById('password').value;
  guardarUsuarios(usuario);

}


function guardarUsuarios(u){
  if(localStorage.usuarios){
    ant=""; g=[];
    ant=JSON.parse(localStorage.getItem('usuarios'));

    for (var i=0;i<ant.length;i++){
      if(usuarios.numDoc==ant[0].numDoc){
        console.log("El usuario Existe");
        var crear=false;
        //Llamar funcion para cargar los datos
      }
    }
      if(!crear){g.push(ant);}
  }
   g.push (u);
  localStorage.setItem('usuarios', JSON.stringify(g));
  // console.log("Guardados "+ localStorage.usuarios);

}

function borrar(){
 ant=""; g="";
localStorage.clear ('usuarios');

}



var usuario1 =new Object();var usuario2 =new Object();var usuario3 =new Object();

function usuPruebas(){

usuario1.numDoc="100"
usuario1.nombreCom="Andres Montealegre"
usuario1.correo="andres@gmail.com"
usuario1.nombreUsuario="andes"
usuario1.password="1234"


usuario2.numDoc="200"
usuario2.nombreCom="DJ ANDES"
usuario2.correo="djandes@gmail.com"
usuario2.nombreUsuario="djandes"
usuario2.password="6789"

usuario3.numDoc="300"
usuario3.nombreCom="Lucho"
usuario3.correo="luisfer@gmail.com"
usuario3.nombreUsuario="fdxhernandez"
usuario3.password="fdx1234"

g.push (usuario1);
g.push (usuario2);
g.push (usuario3);
localStorage.setItem('usuarios', JSON.stringify(g));

}