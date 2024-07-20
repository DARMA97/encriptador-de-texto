let texto = document.getElementById("texto").value;
let parrafo = document.getElementById("parrafo-encrip");

function encriptar(){
    texto.toLowerCase();
    console.log(texto);

    // se busca las letras especificas con expReg y se reemplazan con su llave correspondiente.
    let textoEncripado = texto.replace(/e/img,"enter");
    textoEncripado = textoEncripado.replace(/i/img,"imes");
    textoEncripado = textoEncripado.replace(/a/img,"ai");
    textoEncripado = textoEncripado.replace(/o/img,"ober");
    textoEncripado = textoEncripado.replace(/u/img,"ufat");
    
    console.log(textoEncripado);

    parrafo.innerHTML=textoEncripado;

    


}

function desencriptar(){

}

function copiar(){

}