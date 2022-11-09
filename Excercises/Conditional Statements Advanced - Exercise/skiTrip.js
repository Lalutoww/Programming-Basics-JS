function santaHoliday(input){
    let days = Number(input[0]);
    let type = input[1];
    let review = input[2];
    let nights = (days - 1);
    let price = 0;
    switch(type){
        case "room for one person": price = 18.00 * nights; break;
        case "apartment":
            price = 25.00 * nights;
            if (days < 10){
                price = price * 0.70;
            }else if(days >= 10 && days <= 15){
                price = price * 0.65;
            }else{
                price = price * 0.50;
            }
        break;
        case "president apartment":
            price = 35.00 * nights;
            if (days < 10){
                price = price * 0.90;
            }else if(days >= 10 && days <= 15){
                price = price * 0.85;
            }else{
                price = price * 0.80;
            }
        break;
    }
    if(review === "positive"){
        price = price * 1.25;
    } else if(review === "negative"){
        price = price * 0.90;
    }
    console.log(price.toFixed(2))
}
santaHoliday(["14","apartment","positive"])


