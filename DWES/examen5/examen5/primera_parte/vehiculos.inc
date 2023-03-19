<?php

class Vehiculo {
    private $nombre;
    private $matr;
    private $edad;

    public function __construct($nombre, $matr, $edad) {
        $this->nombre = $nombre;
        $this->matr = $matr;
        $this->edad = $edad;
    }

    public function getNombre() {
      return $this->nombre;
    }

    public function getMatr() {
      return $this->matr;
    }

    public function getEdad() {
      return $this->edad;
    }

    public function ver() {
      echo "El vehículo con matrícula " . $this->matr . " tiene una antiguedad de " . $this->edad . " años.";
    }

    public function actualizar_matricula($nueva_matr) {
      $this->matr = $nueva_matr;
    }

    public function ver_completo() {
      echo "Nombre: " . $this->nombre . "<br>";
      echo "Matrícula: " . $this->matr . "<br>";
      echo "Antigüedad: " . $this->edad . " años.<br>";
    }

}

?>