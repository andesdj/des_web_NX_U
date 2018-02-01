<?php



class Auto  {


protected $cilindrajes;
private $modelo;

public static $peso;
const RUEDAS =4;

public __construct ($cilindraje, $modelo, $peso){
	$this->$cilindrajes=$cilindraje;
	$this->$modelo=$modelo;
	$this->$peso=$peso;
}

	public function arrancar($velocidad) {
		echo "<p> El auto ha arrancado a una velocidad de  " .  $velocidad . " Km/h </p>";
	}
}

$a = new Auto(2500, '2018', 500);

echo $a->arrancar(120);
echo "<br>";
echo Auto::RUEDAS;

?>