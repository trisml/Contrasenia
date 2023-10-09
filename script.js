

function validarContrasenia() {
    let contrasena = document.getElementById("contrasena").value;
    const min = /[a-z]/;
    const max= /[A-Z]/;
    const especiales = /[!@#$%^&*()_+{}:<>?]/;
    const number = /[0-9]/;

    if(!(contrasena.length >=8 && min.test(contrasena) && max.test(contrasena) && especiales.test(contrasena) && number.test(contrasena))){
        document.getElementById("mensaje").innerHTML="La contraseña no cumple los requisitos de seguridad"
    }else{
        document.getElementById("mensaje").innerHTML="La contraseña cumple los requisitos de seguridad"
    }

    
}
/* if(!(contrasena.length >=8 && min.test(contrasena) && max.test(contrasena) && especiales.test(contrasena) && number.test(contrasena))){
    document.getElementById("mensaje").innerHTML="La contraseña no cumple los requisitos de seguridad"
    }else{
    document.getElementById("mensaje").innerHTML="La contraseña cumple los requisitos de seguridad"
    }
*/
