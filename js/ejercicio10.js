
let filas = parseInt(prompt('Ingrese el numero de filas'));
let columnas = parseInt(prompt('Ingrese un numero de columnas'));
let resultado = filas * columnas;

console.log(filas);
console.log(columnas);
    for(let inidiceFila = 0; inidiceFila < filas; inidiceFila++ ){
        document.write(`<tr>`)
        for(let indiceColumna = 0; indiceColumna < columnas; indiceColumna++){
            document.write(`<td>hola</td>`)
            document.write(`<td>${resultado}</td>`);
            resultado--; //resultado = resultado - 1
        }
        document.write(`</tr>`)
    }