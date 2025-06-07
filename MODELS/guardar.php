<?php
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $tipo_consulta = $_POST["tipo_consulta"];
    $mensaje = $_POST["mensaje"];

    // Insertar en cliente
    $stmt1 = $conn->prepare("INSERT INTO cliente (nombre, telefono) VALUES (?, ?)");
    $stmt1->bind_param("si", $nombre, $telefono);
    $stmt1->execute();
    $idcliente = $stmt1->insert_id;
    $stmt1->close();

    // Insertar en formulario
    $stmt2 = $conn->prepare("INSERT INTO formulario (idcliente, tipo_consulta, mensaje) VALUES (?, ?, ?)");
    $stmt2->bind_param("iss", $idcliente, $tipo_consulta, $mensaje);
    $stmt2->execute();
    $stmt2->close();

    echo "Datos guardados correctamente.";
} else {
    echo "Acceso no permitido.";
}
?>
