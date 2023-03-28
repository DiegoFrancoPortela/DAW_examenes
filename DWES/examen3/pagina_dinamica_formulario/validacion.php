<?php
function validarProvincia($provincia) {
    $patron = "/^(Coruña|Lugo|Ourense|Pontevedra)$/";
    return preg_match($patron, $provincia);
}

function validarDia($dia) {
    $patron = "/^\d{1,2}$/";
    return preg_match($patron, $dia);
}

function validarMes($mes) {
    $patron = "/^\d{1,2}$/";
    return preg_match($patron, $mes);
}

function validarAnho($anho) {
    $patron = "/^\d{4}$/";
    return preg_match($patron, $anho);
}

function validarTexto($texto) {
    $patron = "/^[\w\s\.,;:?!()@#\$%&*+=-]*$/u";
    return preg_match($patron, $texto);
}

function validarArchivo($nombre_archivo) {
    $patron = "/^[a-zA-Z0-9_\.-]+\.[a-zA-Z]{2,4}$/";
    return preg_match($patron, $nombre_archivo);
}
?>
