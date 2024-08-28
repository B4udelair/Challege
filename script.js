var botonEncriptar = document.querySelector(".btn-encriptar");
var botonEncriptar = document.querySelector(".btn-desencriptar");
var botonEncriptar = document.querySelector(".contenedor-muñeco");
var botonEncriptar = document.querySelector(".contenedor-parrafo");
var botonEncriptar = document.querySelector(".contenedor-copiar");
var botonEncriptar = document.querySelector(".contenedor-resultado");

botonEncriptar.onclick= encriptar;
botonDesencriptar.onclick= desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent= encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent= desencriptarTexto (cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    contenedor-muñeco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal == textoFinal + "enter"
        }


}


