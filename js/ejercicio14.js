let frase = prompt('introduce un texto');
let palabras = frase.length;
let caracter;
let letra;
for ( letra= 0 ; letra< palabras; letra ++ ){
    caracter=frase.charAt(letra);
    if (letra==palabras-1){
        document.write(caracter);
    }
    else {
        document.write( caracter + '-');
    }
}