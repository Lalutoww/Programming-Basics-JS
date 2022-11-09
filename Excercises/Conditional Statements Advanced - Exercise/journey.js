function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let place = 0;
    let price = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        switch(season){
            case "summer": price = budget * 0.70; place = "Camp"; break;
            case "winter": price = budget * 0.30; place = "Hotel"; break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch(season){
            case "summer": price = budget * 0.60; place = "Camp"; break;
            case "winter": price = budget * 0.20; place = "Hotel"; break;
        }
    } else {
        destination = "Europe";
        price = budget * 0.10;
        place = "Hotel";
    }
    let diff = Math.abs(budget - price);

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${diff.toFixed(2)}`);
}
journey(["1500", "summer"])