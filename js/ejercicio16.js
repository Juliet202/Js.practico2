let texto = prompt("Introduce un Texto:");
let letras = texto.length;
let a;
let tex;
let resultado = "";
for (a = 0; a < letras; a++) {
    tex = texto.charAt(a);   
    resultado = tex + resultado;
}
document.write(resultado);