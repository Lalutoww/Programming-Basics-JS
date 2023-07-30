function toyShop(input) {
    let priceVacation = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let allToys = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    let money = puzzleCount * 2.60 + dollCount * 3 + bearCount * 4.10 + minionCount * 8.20 + truckCount * 2;

    if (allToys >= 50) {
        let discount = money * 0.25
        money = money - discount
    }

    let rent = money * 0.10
    let moneyLeft = money - rent
    let diff = Math.abs(moneyLeft - priceVacation)
    if (moneyLeft >= priceVacation) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}
toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"
])