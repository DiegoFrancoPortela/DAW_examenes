<?php

// Variables
$ip = $_SERVER['REMOTE_ADDR'];
$host = $_SERVER['HTTP_HOST'];
$fecha_hora = date('d/m/Y H:i:s');
$metodo = $_SERVER['REQUEST_METHOD'];
$cadena_consulta = $_SERVER['QUERY_STRING'];

// Plantilla
echo 
<<<EXAMEN
<p>Esta petición viene de la dirección ip cliente $ip y trae en la cabecera Host el valor $host. La fecha y hora de la petición es <b> $fecha_hora </b>.</p>

<p>Está usando el método http $metodo , y la cadena de consulta es <b>$cadena_consulta</b></p>
EXAMEN;

?>