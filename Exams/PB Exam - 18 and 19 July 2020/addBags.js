function addBags(input){
    let priceBagOver20 = Number(input[0]);
    let bagKg = Number(input[1]);
    let daysLeft = Number(input[2]);
    let quantity = Number(input[3]);
    let bagPrice = 0;
    if(bagKg < 10){
        bagPrice = priceBagOver20 * 0.2;
    }else if(bagKg >= 10 && bagKg <= 20){
        bagPrice = priceBagOver20 * 0.5;
    }else{
        bagPrice = priceBagOver20;
    }
    if(daysLeft > 30){
        bagPrice = bagPrice * 1.10;
    }else if(daysLeft <= 30 && daysLeft >= 7){
        bagPrice = bagPrice * 1.15
    }else{
        bagPrice = bagPrice * 1.40;
    }
    let totalBagPrice = bagPrice * quantity
    console.log(`The total price of bags is: ${totalBagPrice.toFixed(2)} lv.`);
}
addBags(["63.80",
"23",
"3",
"1"])

