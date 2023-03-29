<?php

// Lista de refranes
$refranes = array(
    'A caballo regalado, no se le ve el diente.',
    'Al que madruga, dios le ayuda.',
    'De tal palo, tal astilla.',
    'La curiosidad mató al gato.',
    'Más vale tarde que nunca.',
    'Ojos que no ven, corazón que no siente.'
);

$refran_aleatorio = $refranes[array_rand($refranes)];

// Respuesta HTTP de tipo texto plano
header('Content-Type: text/plain');

echo $refran_aleatorio;

?>
