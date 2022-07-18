let number = prompt('Indique un numero');

if(Number(number)==number){
    if(number>0 && number<=50){
        let repeat,i;
    for(i=0; i<=number; i++){
        for(repeat=1; repeat<= i; repeat++){
            document.write(repeat);
        }
        document.write('<br>');
    }
    }
}