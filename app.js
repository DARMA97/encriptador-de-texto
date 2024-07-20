function encriptar(){

    let texto = document.querySelector("#texto").value.toLowerCase();
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo-encrip");
    let contenido= document.getElementById("textoEncriptdo");
    let textoEncriptado = texto
    .replace(/e/img,"enter")
    .replace(/i/img,"imes")
    .replace(/a/img,"ai")
    .replace(/o/img,"ober")
    .replace(/u/img,"ufat");

    tituloMensaje.textContent= "";
    parrafo.textContent="";
    contenido.innerHTML=textoEncriptado;

    document.getElementById("textoEncriptdo").style.display="show";
    document.getElementById("textoEncriptdo").style.display="inherit";

    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

    document.getElementById("persona").style.display="none";

    return console.log(textoEncriptado);
  
}

function desencriptar(){
    let texto = document.querySelector("#texto").value.toLowerCase();
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo-encrip");
    let contenido = document.getElementById("textoEncriptdo");

    let textoDesencriptado = texto
    .replace(/enter/img,"e")
    .replace(/imes/img,"i")
    .replace(/ai/img,"a")
    .replace(/ober/img,"o")
    .replace(/ufat/img,"u");

    tituloMensaje.textContent= "";
    parrafo.textContent="";
    contenido.innerHTML = textoDesencriptado;

    return console.log(textoDesncriptado);

}

function copiar(){

    let contenido = document.querySelector("#textoEncriptdo");
    contenido.select();
    return document.execCommand("copy");

}