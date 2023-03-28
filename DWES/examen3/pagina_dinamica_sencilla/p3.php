<?php

$num_variables = count($_SERVER);
echo "<h2>Cantidad de Variables de \$_SERVER: $num_variables</h2>";
echo "<ul>";

foreach ($_SERVER as $variable => $valor) {
    echo "<li>$variable: $valor</li>";
}

echo "</ul>";

?>