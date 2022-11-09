function basketballEquipment(input){
    let annualTaxes = Number(input[0]);
    let basketballShoes = annualTaxes - (annualTaxes * 0.40);
    let basketballKit = basketballShoes - (basketballShoes * 0.20);
    let basketball = basketballKit / 4;
    let basketballAccessories = basketball / 5;
    let totalSum = annualTaxes + basketballShoes + basketballKit +
        basketball + basketballAccessories
    
    console.log(totalSum)


}
basketballEquipment([550])