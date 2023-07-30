function cinema(input){
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let income = 0;

    switch(type){
        case "Premiere":
            income = 12.00 * rows * columns;
        break;
        case "Normal":
            income = 7.50 * rows * columns;
        break;
        case "Discount":
            income = 5.00 * rows * columns;
        break;
    }
    console.log(`${income.toFixed(2)} leva`)
}
cinema(["Discount", "12", "30"])


