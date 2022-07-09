let nota = Number(prompt('introducir nota'));
if (nota <= 2) {
    console.log(' 0-2: muy deficiente');
}
else if (nota <= 4) {
    console.log(' 3-4: insuficiente');
}
else if (nota <= 6) {
    console.log(' 5-6: suficiente');
}
else if (nota === 7) {
    console.log('7: bien');
}
else if (nota <= 9) {
    console.log('notable');
}
else if (nota === 10) {
    console.log('sobresaliente');
}
else if ((nota >10) || (nota <0)) { 
    console.log('numero erroneo');
}
else if (nota !== Number ) {
    console.log('introduzca un número válido');
}