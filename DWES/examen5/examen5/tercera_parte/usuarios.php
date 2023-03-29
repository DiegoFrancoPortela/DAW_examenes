<?php

$almacen_json = file_get_contents("/home/diego/Documentos/DWES/examen5/tercera_parte/usuarios.json");

$usuarios = json_decode($almacen_json, true)["usuarios"];

// EJERCICIO 1

foreach ($usuarios as $usuario) {
    echo "DNI: " . $usuario["dni"] . "<br>";
    echo "Nombre: " . $usuario["nombre"] . "<br>";
    echo "Email: " . $usuario["email"] . "<br>";
    echo "<br>";
}

echo "<br>";
// EJERCICIO 2
echo "<br>";

// Comprobar si se ha pasado un DNI específico como parámetro GET
if(isset($_GET["dniEspecifico"])) {
    $dniEspecifico = $_GET["dniEspecifico"];

    $usuarioEspecifico = null;
    foreach ($usuarios as $usuario) {
        if ($usuario["dni"] === $dniEspecifico) {
            $usuarioEspecifico = $usuario;
            break;
        }
    }

    if ($usuarioEspecifico !== null) {
        echo "Datos del Usuario con DNI: $dniEspecifico <br>";
        echo "DNI: " . $usuarioEspecifico["dni"] . "<br>";
        echo "Nombre: " . $usuarioEspecifico["nombre"] . "<br>";
        echo "Email: " . $usuarioEspecifico["email"] . "<br>";
        echo "<br>";
    } else {
        echo "Usuario no encontrado en la base de datos";
    }
}


?>
