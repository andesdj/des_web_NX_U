<?php

include "operaciones.php";
include "vista/tablero.php";


$a=5;
$b=10;
$imp= new Visualizador ("La suma de ".$a . " y ". $b ." Es: " . sumar($a,$b));
$imp->mostrarTitulo();


?>