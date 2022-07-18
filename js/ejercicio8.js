let number = prompt('Indique un numero');

if(Number(number)==number){
    if(number>0 && number<=50){
        let repeat;
        let n;
    for(n=0; n<=number; n++){
        for(repeat=1; repeat<= n; repeat++){
            document.write(repeat);
        }
        document.write('<br>');
    }
    }
}