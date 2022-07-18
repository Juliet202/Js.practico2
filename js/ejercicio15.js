let texto = prompt("Introduce un texto");
    let letra = texto.length;    
    texto = texto.toUpperCase();  
    let l;
    let contador = 0;
    let a;
    for (a = 0; a < letra; a++) {
        l = texto.charAt(a); 
        if ((l == "A") || (l == "E") || (l == "I") || (l == "O") || (l == "U")) {
            contador++;
        }
    }
    document.write("N° Vocales: " + contador);
