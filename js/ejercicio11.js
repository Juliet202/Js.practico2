let edad1 = Number (prompt('Ingrese su edad'))
let nombre1 = prompt('Ingrese su nombre')

let edad2 = Number (prompt('Ingrese su edad2'))
let nombre2 = prompt('Ingrese su nombre2')

let edad3 = Number (prompt('Ingrese su edad3'))
let nombre3= prompt('Ingrese su nombre3')

let mayor = Math.max (edad1, edad2, edad3)

if (mayor==edad1){
    document.write('El mayor es' + nombre1);
}

if (mayor==edad2){
    document.write('El mayor es' + nombre2);
}

if (mayor==edad3){
    document.write('El mayor es' + nombre3);
}