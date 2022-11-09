function touristShop(input){

    let budget = Number(input[0]);
    let command = input[1];
    let index = 2;
    let totalPrice = 0;
    let productCount = 0;
    while (command !== "Stop") {
        productCount++
        let productPrice = Number(input[index++])
        if(productCount % 3 === 0){
            productPrice /= 2;
        }
        totalPrice += productPrice;
        budget -= productPrice;
        let check = Math.abs(budget);
        if(budget < totalPrice){
            console.log(`You don't have enough money!`)
            console.log(`You need ${check.toFixed(2)} leva!`)
            break;
        }      
        command = input[index++]
    }
    if(command === "Stop"){
        console.log(`You bought ${productCount} products for ${totalPrice.toFixed(2)} leva.`);
    }

}
touristShop([54,
"Thermal underwear",
"24",
"Sunscreen",
"45"])