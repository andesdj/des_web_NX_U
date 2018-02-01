<?php
$user =$_POST['user'];


if($user!=""){

  echo "se recibieron los datos adecuadamente. El usuario es ". $user ;
} else {

  echo "no se es un usuario valido";
}


 ?>
