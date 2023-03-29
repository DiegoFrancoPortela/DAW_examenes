<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Mi sitio web</title>
    <style>
        /* Estilos para el menú superior */
        #header {
            background-color: #333;
            color: #fff;
            padding: 10px;
        }

        #header ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            justify-content: space-between;
        }

        #header li {
            margin: 0 10px;
        }

        #header a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
        }

        #header a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <nav id="header">
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Ejemplo</a></li>
            <li><a href="/">Ejemplo2</a></li>
        </ul>
    </nav>
</body>