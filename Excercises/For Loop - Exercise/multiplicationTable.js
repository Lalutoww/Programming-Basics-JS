function multiplicationTable(input){
    let multiplicator = Number(input[0]);
    let sum = 0;
    for(i=1; i<=10; i++){
        sum = i * multiplicator;
        console.log(`${i} * ${multiplicator} = ${sum}`)
    }
}
multiplicationTable(["5"])