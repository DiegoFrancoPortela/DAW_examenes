<?php

// Lista de Colores
$colores = array('rojo', 'azul', 'verde', 'amarillo', 'naranja');

$color_aleatorio = $colores[array_rand($colores)];

// Respuesta HTTP de tipo texto plano
header('Content-Type: text/plain');

echo $color_aleatorio;

?>
