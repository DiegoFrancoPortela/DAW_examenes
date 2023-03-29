<?php

// /api/contador.php?texto=Hola

$texto = $_GET['texto'];

$num_caracteres = strlen($texto);

header('Content-Type: text/plain');

echo $num_caracteres;

?>
