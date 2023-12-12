let codigo = "";
$(document).ready(function (event) {
  //<!–***********************************************************************************************–>
  //Menu Principal
  //<!–***********************************************************************************************–>
  $("#MC0").click(function (e) {
    $("#C0").show();
    $("#C1").hide();
  });
  $("#MC1").click(function (e) {
    $("#C1").show();
    $("#C0").hide();
  });

  $("#EQR").click(function (e) {
    $("#Escanear").show();
    $("#NuevoTrabajador").hide();
    $("#Formulario").hide();
    $("#SupMenu").hide();
  });
  $("#NTra").click(function (e) {
    $("#NuevoTrabajador").show();
    $("#Escanear").hide();
    $("#Formulario").hide();
    $("#SupMenu").hide();
  });
  $("#Reg").click(function (e) {
    $("#Formulario").show();
    $("#NuevoTrabajador").hide();
    $("#Escanear").hide();
    $("#SupMenu").hide();
  });
  $("#GRE").click(function (e) {
    $("#SupMenu").show();
    $("#Escanear").hide();
    $("#Formulario").hide();
    $("#NuevoTrabajador").hide();
  });
  $("#GRE1").click(function (e) {
    $("#SupMenu").show();
    $("#Escanear").hide();
    $("#Formulario").hide();
    $("#NuevoTrabajador").hide();
  });
  //<!–***********************************************************************************************–>
  //Inicio de Seguridad
  //<!–***********************************************************************************************–>
  var usuarios = [
    { usuario: "Guardia1", contrasena: "clave1" },
    { usuario: "Guardia2", contrasena: "clave2" },
    { usuario: "Guardia3", contrasena: "clave3" }
  ];
  $("#IniciarSesion").click(function (e) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar si el usuario y la contraseña no están vacíos
    if (username.trim() === "" || password.trim() === "") {
      alertify.success("Por favor, ingresa el usuario y la contraseña.");
    } else {
      // Verificar si el usuario y la contraseña coinciden con algún usuario del arreglo
      var usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.usuario === username && usuario.contrasena === password;
      });

      if (usuarioEncontrado) {
        // Usuario y contraseña válidos
        alertify.success("Inicio de sesión exitoso");
        $("#SupMenu").show();
        $("#Formulario").hide();

      } else {
        // Usuario o contraseña incorrectos
        alertify.error("Usuario o contraseña incorrectos.");
      }
    }
  });
  //<!–***********************************************************************************************–>
    //Boton Guardar Registro Visitante
  //<!–***********************************************************************************************–>
  $("#RVEnviar").click(function(e){

    var NomVis=document.getElementById("RVNo"  ).value;
    var APVis=document.getElementById("RVAP").value;
    var AMVis=document.getElementById("RVAM").value;
    var COVis=document.getElementById("RVCo"   ).value;
    var TEVis=document.getElementById("RVTe" ).value;
    var RVDp=document.getElementById("RVDp").value;
    if(NomVis.trim() =="" || APVis.trim() =="" || AMVis.trim() =="" || COVis.trim() =="" || TEVis.trim() =="" || RVDp.trim() ==""){
      alertify.error("Campos Vacios");
    }else{
      generarCodigo();
      const fechaActual = obtenerFechaActual();
      console.log(fechaActual);
      accion="RegistroVs";
      $.ajax({
        url:"./php/server.php",type:'GET',data:{accion:accion},success:function(respuestaServidor){
          alert(respuestaServidor);
            if(respuestaServidor=="1"){
                alert("Registro correcto!");
            } else {
                alert("No se registro");
            }
        }
    });
    }
});
  //<!–***********************************************************************************************–>
      //Boton Guardar Registro Trabajador
  //<!–***********************************************************************************************–>
});
function generarCodigo() {
  const caracteres = "1234567890ABCD";
  for (let i = 0; i < 6; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indiceAleatorio);
  }

  return codigo;
}
function obtenerFechaActual() {
  const fecha = new Date();
  const dia = agregarCeroAntes(fecha.getDate());
  const mes = agregarCeroAntes(fecha.getMonth() + 1);
  const año = fecha.getFullYear();
  const hora = agregarCeroAntes(fecha.getHours());
  const minutos = agregarCeroAntes(fecha.getMinutes());
  const segundos = agregarCeroAntes(fecha.getSeconds());
  
  const fechaActual = `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`;
  return fechaActual;
}
function agregarCeroAntes(numero) {
  return numero < 10 ? "0" + numero : numero;
}

