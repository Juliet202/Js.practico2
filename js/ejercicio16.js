let texto = prompt("Introduce un Texto:");
let letras = texto.length;
let i;
let tex;
let resultado = "";
for (i = 0; i < letras; i++) {
    tex = texto.charAt(i);   
    resultado = tex + resultado;
}
document.write(resultado);