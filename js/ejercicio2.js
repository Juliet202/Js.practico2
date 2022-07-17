let nota = Number(prompt('Introducir nota'));

if (nota <= 2) {
    document.write(' 0-2: Muy deficiente');
}
else if (nota <= 4) {
    document.write(' 3-4: Insuficiente');
}
else if (nota <= 6) {
    document.write(' 5-6: Suficiente');
}
else if (nota === 7) {
    document.write('7: Bien');
}
else if (nota <= 9) {
    document.write('Notable');
}
else if (nota === 10) {
    document.write('Sobresaliente');
}
else if ((nota >10) || (nota <0)) { 
    document.write('Numero erroneo');
}
else if (nota !== Number ) {
    document.write('Introduzca un número válido');
}