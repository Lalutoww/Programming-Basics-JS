function schoolSupplies(input){
    let penNumber = Number(input[0]);
    let markerNumber = Number(input[1]);
    let cleanser = Number(input[2]);
    let discount = Number(input[3]);

    let totalSum = (penNumber * 5.80 + markerNumber * 7.20 + cleanser * 1.20)
    let discountedSum = totalSum - (totalSum * (discount /100));
    console.log(discountedSum)

}
schoolSupplies([2, 3, 4, 25])