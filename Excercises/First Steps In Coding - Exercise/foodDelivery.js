function foodDelivery(input){
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);

    const chickenPrice = 10.35;
    const fishPrice = 12.40;
    const vegPrice = 8.15;

    let sumNoDesert = chickenMenus * chickenPrice + fishMenus * fishPrice +
    vegetarianMenus * vegPrice;
    let sumWithDesert = (sumNoDesert * 0.20) + sumNoDesert;
    let totalSum = sumWithDesert + 2.50;
    
    console.log(totalSum);
}
foodDelivery([9, 2, 6])