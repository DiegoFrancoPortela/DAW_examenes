<?php

if (isset($_GET['category'])) {
    $categoria = $_GET['category'];
    $url = 'https://api.chucknorris.io/jokes/random?category=' . urlencode($categoria);
    $api = file_get_contents($url);
    $chiste = json_decode($api);

    echo '<p><i>' . $chiste->value . '</i></p>';
    echo '<br>';
    echo '<p><b>Actualizado: </b>' . $chiste->updated_at . '</p>';
    if (!empty($chiste->categories)) {
        echo '<p><b>Categoría: </b>' . implode(', ', $chiste->categories) . '</p>';
    } else {
        echo '<p><b>Categoría:</b> No posee </p>';
    } 
}   

?>
