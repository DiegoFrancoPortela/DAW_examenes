<?php

// EJERCICIO 1

$fichero = "ejemplo.txt";
$ruta = realpath($fichero);
echo "El archivo $fichero se encuentra en la ruta: $ruta";

echo "<br>";
// EJERCICIO 2
echo "<br>";

if (file_exists($ruta)) {
    echo "El archivo $fichero existe";
  } else {
    echo "El archivo $fichero no existe";
}

echo "<br>";
// EJERCICIO 3
echo "<br>";

$contenido = file_get_contents($ruta);
echo "El contenido del fichero es: $contenido";

echo "<br>";
// EJERCICIO 4
echo "<br>";

$array = array("1", "2", "3", "4");

$texto = implode(PHP_EOL, $array);
file_put_contents($ruta, $texto, FILE_TEXT);
echo "El archivo $fichero ha sido actualizado con los elementos del array.";

echo "<br>";
// EJERCICIO 5
echo "<br>";

$fichero_csv = "ejemplo.csv";
$ruta_csv = realpath($fichero_csv);

$archivo_csv = fopen($ruta_csv, "r");
$linea = fgetcsv($archivo_csv);
fclose($archivo_csv);

$array_csv = explode(",", $linea[0]);

print_r($array_csv);

?>