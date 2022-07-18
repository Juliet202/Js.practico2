let number = prompt('Indique un numero');

if (Number(number)==number){
    if(number>0 && number<=50){
        let repeat;
        let n;
    for(n=number; n>=1; n--){
    for(repeat=n; repeat>=1; repeat--){
        document.write(n);
    }
    document.write('<br>')
    }
    } 
}
