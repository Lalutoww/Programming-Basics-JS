function changeBuerau(input){
    let bitcoin = 1168;
    let dollar = 1.76;
    let china = 0.15 * dollar;
    let euro = 1.95;
    
    let bitcoinNumber = Number(input[0]);
    let chinaNumber = Number(input[1]);
    let comission = Number(input[2]);
    comission = comission / 100;
    let totalLeva = bitcoinNumber * bitcoin + chinaNumber * china
    let totalEuro = (totalLeva / euro) * (1-comission);
    console.log(totalEuro.toFixed(2));
}
changeBuerau(["7", "50200.12", "3"])