
document.getElementById('boton-perfil').addEventListener("click", function(){
  
var persona= new Object();

persona.nombre="Andres Montealegre";
persona.ciudad="Bogota";
persona.entidad="Nueva EPS";
persona.peso=74;
persona.estatura=1.72;

persona.fecha= new Date('2017 12 31');


console.log("Nombre del paciente: "+persona.nombre);
console.log("Ciudad del paciente: "+persona.ciudad);
console.log("Entidad EPS del parciente"+persona.entidad);
console.log("Peso del paciente: "+persona.peso+" Kg");
console.log("Estatura del paciente: "+persona.estatura+ " m");
console.log("Fecha de Nacimiento"+persona.fecha);
console.log("IMC del Paciente:"  + ((persona.peso)/(Math.pow(persona.estatura,2))) ) ;
})
