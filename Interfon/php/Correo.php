<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $nombres = $_POST["RVNo"];
    $apellidoPaterno = $_POST["RVAP"];
    $apellidoMaterno = $_POST["RVAM"];
    $correo = $_POST["RVCo"];
    $telefono = $_POST["RVTe"];
    $areaVisitar = $_POST["RVTAre_Depa"];

    // Compose email message
    $subject = "Registro de Visita";
    $message = "Nombres: $nombres\n";
    $message .= "Apellido Paterno: $apellidoPaterno\n";
    $message .= "Apellido Materno: $apellidoMaterno\n";
    $message .= "Correo: $correo\n";
    $message .= "Telefono: $telefono\n";
    $message .= "Area a Visitar: $areaVisitar\n";

    // Email settings
    $to = $correo; // Change this to the actual recipient's email address
    $headers = "From: angelalexisreyes.e@gmail.com"; // Change this to a valid sender email address

    // Send email
    mail($to, $subject, $message, $headers);

    // Redirect or display a thank you message
    header("Location: thank_you.html"); // Change this to the actual thank you page
    exit();
}
?>
