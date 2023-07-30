function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extra = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decor = budget * 0.10
    let allClothes = extra * clothesPrice
    if (extra > 150) {
        allClothes = allClothes - (allClothes * 0.10)
    }
    let totalMoney = decor + allClothes
    let diff = Math.abs(totalMoney - budget)
    if (totalMoney > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["9587.88",
    "222",
    "55.68"
])