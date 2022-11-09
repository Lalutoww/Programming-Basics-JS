function godzillaVsKong(input){
    let movieBudget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let clothesPrice = Number(input[2]);
    let decor = movieBudget * 0.1;
    if(actorsCount > 150){
        clothesPrice *= 0.9;
    }
    let totalSum = actorsCount * clothesPrice + decor;
    let diff = Math.abs(totalSum - movieBudget);

    if(totalSum > movieBudget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    }else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["20000", 
"120",
"55.5"])

