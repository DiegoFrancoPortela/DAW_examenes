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

$refran_1 = $refranes[array_rand($refranes)];
$refran_2 = $refranes[array_rand($refranes)];
$refran_3 = $refranes[array_rand($refranes)];

header('Content-Type: application/json');

$refranes_json = array(
    array('orden' => 'primero', 'refran' => $refran_1),
    array('orden' => 'segundo', 'refran' => $refran_2),
    array('orden' => 'tercero', 'refran' => $refran_3)
);

echo json_encode($refranes_json);

?>
