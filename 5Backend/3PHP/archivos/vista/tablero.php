<?php
class Visualizador 
{
	public $mensaje;

	function __construct ($mensaje) 
	{
		$this -> mensaje = $mensaje;
	}

	public function mostrarNormal() {
		// echo "<p> ". $this->$mensaje ."</p>";
		echo $this -> mensaje;
	}


	public function mostrarTitulo() {
			echo "<h1> ". $this -> mensaje ."</h1>";
		}
}



?>