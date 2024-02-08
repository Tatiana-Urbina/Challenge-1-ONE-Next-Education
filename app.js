function condicionesIniciales(){
    cambiarTexto('h3', 'Ningún mensaje fue encriptado.')
    cambiarTexto('p', 'Ingrese el texto que desea encriptar');
    document.getElementById('btn-copiar').style.display = 'none';
}



function cambiarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiar(){
    document.querySelector('#mensj_Texto').value = '';
    document.querySelector('#texto_usuario').value = '';
    
}

function desEncriptar(){
    var regex = /^[a-z]+$/;
    let texto = document.getElementById("texto_usuario").value;
        if(regex.test(texto) && texto.length !=0){
        let textoDesencriptado = texto.replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

            document.getElementById("txtEncriptado").value = textoDesencriptado;
            document.getElementById('btn-copiar').style.display = 'block';
            cambiarTexto('p', '');
            cambiarTexto('h3', '');
        }else{
            
        }

    limpiar()
}

function funcionEncriptar(){
    var regex = /^[a-z]+$/;
    let texto = document.getElementById("texto_usuario").value;
    if (regex.test(texto) && texto.length !=0){
        let textoEncriptado = texto.replace(/e/gi, "enter")
                                .replace(/i/gi, "imes")
                                .replace(/a/gi, "ai")
                                .replace(/o/gi, "ober")
                                .replace(/u/gi, "ufat");
        
        document.getElementById("txtEncriptado").value = textoEncriptado;
        document.getElementById('btn-copiar').style.display = 'block';
        document.getElementById('img-desEncrp').style.opacity = '0';
        cambiarTexto('p', '');
        cambiarTexto('h3', '');
    }else{
        
    }

    limpiar()
}

function cambiarImagen(){
    var imagen = document.querySelector('#img-desEncrp');

    imagen.src = 'img/diamod.png';

}

function copiar(){
    let copiarTexto = document.getElementById('txtEncriptado');
    let btnCopiar = document.getElementById('btn-copiar');

    btnCopiar.addEventListener('click', e =>{
        copiarTexto.select();
        document.execCommand('copy');

        btnCopiar.innerHTML = 'Copiado';
        
    })


    limpiar()

}

condicionesIniciales();

