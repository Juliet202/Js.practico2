let texto = prompt("Introduce un texto:");
    var letra = texto.length;    
    texto = texto.toUpperCase();  
    let l;
    let contador = 0;
    let i;
    for (i = 0; i < letra; i++) {
        l = texto.charAt(i); 
        if ((l == "A") || (l == "E") || (l == "I") || (l == "O") || (l == "U")) {
            contador++;
        }
    }
    document.write("N° Vocales: " + contador);
