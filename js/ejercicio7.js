let number = prompt('Indique un numero');

if (Number(number)==number){
    if(number>0 && number<=50){
        let repeat,i;
    for(i=number; i>=1; i--){
    for(repeat=i; repeat>=1; repeat--){
        document.write(i);
    }
    document.write('<br>')
    }
    } 
}
