<?php

    include "/home/diego/Documentos/DWES/examen5/primera_parte/vehiculos.inc";

    $v1 = new Vehiculo("Coche1", "0000AAA", 2);
    $v2 = new Vehiculo("Coche2", "1111BBB", 3);

    echo "- Vechículo 1:<br>";
    $v1->ver();
    echo "<br>";

    echo "- Vechículo 2:<br>";
    $v2->ver_completo();
    echo "<br>";

?>