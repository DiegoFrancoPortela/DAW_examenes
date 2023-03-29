<?php

// http://localhost/examen6Dwes/api/imc.php?peso=80&altura=1.75

$peso = $_GET['peso'];
$altura = $_GET['altura'];

$imc = $peso / ($altura * $altura);

header('Content-Type: text/plain');

echo "Tu IMC es: " . $imc;

?>
