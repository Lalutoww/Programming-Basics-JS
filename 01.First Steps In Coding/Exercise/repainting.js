function reapinting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hours = Number(input[3]);
    let bags = 0.40;

    nylon = nylon + 2;
    paint = paint * 1.10;
    
    let materialSum = nylon * 1.50 + paint * 14.50 + paintThinner * 5 +
    bags;
    let workersPrice = (materialSum * 0.30) * hours;
    let totalSum = workersPrice + materialSum

    console.log(totalSum)

}
reapinting([10, 11, 4, 8])