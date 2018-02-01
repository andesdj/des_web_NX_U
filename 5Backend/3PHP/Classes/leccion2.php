<?php



class Auto  {


protected $cilindrajes;
private $modelo;

public static $peso;
const RUEDAS =4;
	public function arrancar($velocidad) {
		echo "<p> El auto ha arrancado a una velocidad de  " .  $velocidad . " Km/h </p>";
	}
}

$a = new Auto();

echo $a->arrancar(120);
echo "<br>";
echo Auto::RUEDAS;

?>