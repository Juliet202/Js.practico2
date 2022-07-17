let fraseCompleta=''

do{
   let textoIngresado = prompt('Ingrese una palabra');
   if(textoIngresado==''){
      fraseCompleta = fraseCompleta + textoIngresado;
   }
   else {
      fraseCompleta= fraseCompleta + '-' + textoIngresado;
   }
}
while (confirm('Quiere ingresar otra palabra?'));
document.write (fraseCompleta);