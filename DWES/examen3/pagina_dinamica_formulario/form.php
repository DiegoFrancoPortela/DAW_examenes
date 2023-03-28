<?php
include 'validacion.php';

$provincia = $_POST['provincia'];
$dia = $_POST['dia'];
$mes = $_POST['mes'];
$anho = $_POST['año'];
$texto = $_POST['texto'];
$nombre_archivo = $_FILES['archivo']['name'];

echo "<h1>Datos enviados por el Usuario</h1>";
echo "Provincia: " . $provincia . "<br>";
echo "Fecha de Nacimiento: " . $dia . "/" . $mes . "/" . $anho . "<br>";
echo "Información adicional: " . $texto . "<br>";
echo "Nombre del archivo: " . $nombre_archivo . "<br>";
echo "<br>";

// Gestión de Errores
$errores = [];

if (!validarProvincia($provincia)) {
    $errores[] = "Provincia";
}
if (!validarDia($dia)) {
    $errores[] = "Día";
}
if (!validarMes($mes)) {
    $errores[] = "Mes";
}
if (!validarAnho($anho)) {
    $errores[] = "Año";
}
if (!validarTexto($texto)) {
    $errores[] = "Información adicional";
}
if (!validarArchivo($nombre_archivo)) {
    $errores[] = "Nombre del archivo";
}

if (empty($errores)) {
    // Si no se producen errores
    echo "Provincia: " . $provincia . "<br>";
    echo "Fecha de Nacimiento: " . $dia . "/" . $mes . "/" . $anio . "<br>";
    echo "Información adicional: " . $texto . "<br>";
    echo "Nombre del archivo: " . $nombre_archivo . "<br>";
} else {
    // Si algún campo es erróneo
    echo "Error en los siguientes campos:<br>";
    echo implode(", ", $errores);
}

?>