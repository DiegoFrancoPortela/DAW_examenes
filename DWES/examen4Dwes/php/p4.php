<?php
session_start();

if(isset($_SESSION['visitas'])) {
    $_SESSION['visitas']++;
} else {
    $_SESSION['visitas'] = 1;
}

// Número de visitas
echo "Número de visitas: " . $_SESSION['visitas'] . "<br>";

// Botón del cierre
echo '<form method="post"><button type="submit" name="cerrar">Cerrar sesión</button></form>';

// Cierre de sesión
if(isset($_POST['cerrar'])) {
    session_destroy();
    header("Location: p4.php");
    exit;
}
?>
