function vacation(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++
    let moneyInBalance = Number(input[index]);
    index++
    let days = 0;
    let spendDays = 0;
    let enoughMoney = true;
    while (moneyInBalance !== neededMoney || moneyInBalance > neededMoney) {
        let command = input[index];
        index++;
        days++
        let nextSum = Number(input[index]);
        if (command === "spend") {
            if (nextSum > moneyInBalance) {
                moneyInBalance = 0;
                spendDays++;
            } else {
                spendDays++;
                moneyInBalance -= nextSum;
            }
            if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(`${days}`);
                enoughMoney = false;
                break;
            }
        } else if (command === "save") {
            moneyInBalance += nextSum;
            spendDays = 0;
        }
        if (moneyInBalance === neededMoney || moneyInBalance > neededMoney) {
            enoughMoney = true;
            break;
        }
        index++
    }

    if (enoughMoney) {
        console.log(`You saved the money for ${days} days.`)
    }

}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

