// Web con parámetro:
// http://localhost:3000/p1.php?nombre=pepe

<?php
if (isset($_GET['nombre'])) {
    $nombre = $_GET['nombre'];
    echo "<h1>Hola $nombre</h1>";
}
?>