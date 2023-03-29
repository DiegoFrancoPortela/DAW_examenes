<?php

$json = file_get_contents('php://input');
$contenido_json = json_decode($json, true);

$nombre_completo = $contenido_json['nombre'] . ' ' . $contenido_json['apellidos'];

header('Content-Type: text/plain');

echo $nombre_completo;

?>
