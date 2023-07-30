function depositCalculator(input) {
    let deposit = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterest = Number(input[2]);

    let sum = deposit + depositTerm * (deposit * (annualInterest / 100) / 12);
    console.log(sum);    
}
depositCalculator([2350, 6, 7])