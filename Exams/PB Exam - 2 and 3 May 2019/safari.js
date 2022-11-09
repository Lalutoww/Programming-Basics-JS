function safari(input) {
    let budget = Number(input[0]);
    let fuel = Number(input[1]);
    let day = input[2];
    let discount = 0;

    let fuelPrice = fuel * 2.10
    if(day === "Saturday"){
        discount = 0.10;
    }else if(day === "Sunday"){
        discount = 0.20;
    }
    let discountedPrice = (fuelPrice + 100)* discount;
    let totalPrice = (fuelPrice + 100) - discountedPrice;
    let diff = Math.abs(totalPrice - budget);

    if(budget >= totalPrice){
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    }else if(budget < totalPrice){
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }

}
safari([1000,10,"Sunday"])
