var IVA = 0.16
var Pedido = {
  cliente: "Federico Gutierrez",
  productos: ["Manzanas", "Refrescos", "Azucar", "Sal", "Lechugas frescas"],
  precios: [500, 4000, 2500, 2000, 5000],
  cantidad: [20, 10, 3, 3, 10]
}





var button = document.getElementById('calculo')
button.addEventListener('click', function(){

var resultado = 0
var premio = ""
var valorTotal = 0

// Algoritmo de calculo
for (var subt in Pedido.precios){

	resultado=(Pedido.cantidad[subt]*Pedido.precios[subt])+resultado;
}
 
  	ValorTotal=(resultado*IVA)+resultado;
 

  if(ValorTotal>100000){
  	premio="Tiene  derecho a  Premio!!";
  } else {
  	premio="No tiene derecho a  Premio";
  }

// console.log("resultado"+resultado);
console.log("Señor El valor total de su pedido sin IVA es de " +resultado+ " Y con IVa es de "+ ValorTotal);
console.log("Debido a tu compra le informo que "+premio);
})
