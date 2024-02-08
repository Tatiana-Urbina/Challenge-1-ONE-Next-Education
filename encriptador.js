let titulo = document.getElementById(mensj_Texto).value;


function funcionEncriptar(){
    let texto = document.getElementById("texto_usuario").value;
    var regex = /^[a-z]+$/;

    if (regex.test(texto) && texto.length !=0){
        let textoEncriptado = texto.replace(/e/gi, "enter")
                                .replace(/i/gi, "imes")
                                .replace(/a/gi, "ai")
                                .replace(/o/gi, "ober")
                                .replace(/u/gi, "ufat");
    
    document.getElementById("txtEncriptado").value = textoEncriptado
    cambiarTexto('h3', 'El mensaje fue encriptado');
    limpiar();
    cambiarImagen();
    }else{
        cambiarTexto('h3', 'Debe ingresar el mensaje que desea encriptar');
    } 

}




function desEncriptar(){
    let texto = document.getElementById("texto_usuario").value;

    let textoDesencriptado = texto.replace(/enter/gi, "e")
                                    .replace(/imes/gi, "i")
                                    .replace(/ai/gi, "a")
                                    .replace(/ober/gi, "o")
                                    .replace(/ufat/gi, "u");

    document.getElementById("txtEncriptado").value = textoDesencriptado;

    limpiar()
}

function limpiar(){
    document.querySelector('#mensj_Texto').value = '';
    document.querySelector('#texto_usuario').value = '';
    
}

function cambiarImagen(){
    var imagen = document.querySelector('#img-desEncrp');

    imagen.src = '';

}

function cambiarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales(){
    document.querySelector('contInput').setAttribute('disabled','true');
}