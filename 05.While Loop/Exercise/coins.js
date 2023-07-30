function coins(input) {
    let index = 0;
    let money = Number(input[index]);
    let moneyInCoins = Math.floor(money * 100);
    let coinCounter = 0;

    while (moneyInCoins > 0) {
        if (moneyInCoins >= 200) {
            moneyInCoins -= 200;
            coinCounter++
        } else if (moneyInCoins >= 100) {
            moneyInCoins -= 100;
            coinCounter++
        } else if (moneyInCoins >= 50) {
            moneyInCoins -= 50;
            coinCounter++
        } else if (moneyInCoins >= 20) {
            moneyInCoins -= 20;
            coinCounter++
        } else if (moneyInCoins >= 10) {
            moneyInCoins -= 10;
            coinCounter++
        } else if (moneyInCoins >= 5) {
            moneyInCoins -= 5;
            coinCounter++
        } else if (moneyInCoins >= 2) {
            moneyInCoins -= 2;
            coinCounter++
        } else if (moneyInCoins >= 1) {
            moneyInCoins -= 1;
            coinCounter++
        }
    }
    console.log(coinCounter)


}
coins(["2"])