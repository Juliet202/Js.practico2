let frase=''

while(confirm('¿Desea ingresar palabras?')){
    let textoIngresado = prompt('Ingrese una palabra');
    frase = frase +' - '+textoIngresado
    console.log(textoIngresado)
    console.log(frase)
}