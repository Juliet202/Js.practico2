let numero = prompt('Indique un numero');

if (Number(numero)==numero){
    if(numero>0 && numero<=50){
        let rep,i;
    for(i=numero; i>=1; i--){
    for(rep=i; rep>=1; rep--){
        document.write(i);
    }
    document.write('<br>')
    }
    } 
}
