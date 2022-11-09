function cleverLily(input) {
    let lilyAge = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let presentMoney = 0;
    let toyCount = 0;
    let moneyFromToys = 0;
    for (let i = 1; i <= lilyAge; i++) {
        if (i % 2 === 0) {
            presentMoney += i * 5;
            presentMoney -= 1
        } else {
            toyCount++
            moneyFromToys = toyCount * toyPrice;
        }
    }
    let totalMoney = presentMoney + moneyFromToys
    let diff = Math.abs(totalMoney - washerPrice)
    if (totalMoney >= washerPrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }

}
cleverLily(["21",
    "1570.98",
    "3"
])