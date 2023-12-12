<?php
include "./conexion.php";
switch($accion){
case "RegistroVs":
    $curp=$_GET["NomVis"];
    $nombre=$_GET["APVis"]; 
    $curp=$_GET["AMVis"];
    $nombre=$_GET["COVis"]; 
    $curp=$_GET["TEVis"];
    $nombre=$_GET["ARVis"]; 
    //prepara la sentencia sql
    $sql="INSERT INTO `visitantes`(`Codigo_QR`, `Nom_Registro`, `Nombre(s)`, `Apellido_Paterno`, `Apellido_Materno`, `Correo`, `Telefono`, `Fecha`) VALUES ([,'',''])";
    //se ejecuta el sql
    $ejecutarSQL=$conexion->query($sql);
    if($ejecutarSQL){//en caso de que la ejecucion se realiza con exito
    echo "1";
    } else {
    echo "0";
    }
    break;
}
?>