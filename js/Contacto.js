function EnvioCorreo(){
 
 
    $("#c_enviar").attr("disabled", true);
    $('.correo-error').css("display","none");  
    $(".correo-error-item").remove();
 
    var filter=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
    var s_email = $('#campo-correo').val();
    var s_name = $('#campo-nombre').val();  
    var valor_telefono = $('#campo-telefono').val();   
    var s_msg = $('#c_msg').val();
 

    if (s_msg.length == 0 ){
        //$('#c_msg').before( "<div class='c_error' id='c_error_msg'>Faltó ingresar el contenido del mensaje.</div>" );
        $('.correo-error').css("display","block");  
        $('.correo-error-titulo').after("<div class='correo-error-item'>Faltó ingresar el contenido del mensaje.</div>");
        var sendMail = "false";
    }

    if (filter.test(s_email)){
        sendMail = "true";
    } 
    else if (s_email.length == 0 ) {
        $('.correo-error').css("display","block");  
        $('.correo-error-titulo').after("<div class='correo-error-item'>Faltó ingresar la dirección de correo.</div>");
        sendMail = "false";
    }
    else{
        //$('#campo-correo').before("<div class='c_error' id='c_error_mail'>Debe ingresar un correo válido.</div>");
        //$('#contactform').css("border-color","#e74c3c");  
        $('.correo-error').css("display","block");  
        $('.correo-error-titulo').after("<div class='correo-error-item'>El correo ingresado no es válido.</div>");
        sendMail = "false";
    }

    if (valor_telefono.length == 0 ){
        //$('#c_telefono').before( "<div class='c_error' id='c_error_name'>Debe ingresar el telefono.</div>" );
        $('.correo-error').css("display","block");  
        $('.correo-error-titulo').after("<div class='correo-error-item'>Faltó ingresar el telefono.</div>");
        var sendMail = "false";
    }

    if (s_name.length == 0 ){
        //$('#campo-nombre').before( "<div class='c_error' id='c_error_name'>Debe ingresar el nombre.</div>" );
        $('.correo-error').css("display","block");  
        $('.correo-error-titulo').after("<div class='correo-error-item'>Faltó ingresar el nombre.</div>");
        var sendMail = "false";
    }
 
   
    if(sendMail == "true"){
    
     var datos = {
 
            "nombre" : $('#campo-nombre').val(),

            "telefono" : $('#campo-telefono').val(),

            "email" : $('#campo-correo').val(),
 
            "mensaje" : $('#c_msg').val()
 
     };
 
     $.ajax({
 
             data:  datos,
             // hacemos referencia al archivo contacto.php
             url:   'contacto-envio.php',
 
             type:  'post',
 
             beforeSend: function () {
             //aplicamos color de borde si el envio es exitoso
                    $('#contactform').css("border-color","#25A25A");
 
                    $("#c_enviar").val("Espere... enviando correo");
 
             },
 
             success:  function (response) {
 
                    $('form')[0].reset();
                    $("#c_enviar").val("Enviar");
                    $("#c_information p").html(response);
                    $("#c_information").fadeIn('slow');
                    $("#c_enviar").removeAttr("disabled");
                    
 
 
             }
 
     });
 
} else{
    $("#c_enviar").removeAttr("disabled");
}
 
}