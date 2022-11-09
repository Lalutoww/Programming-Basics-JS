function cinemaVoucher(input){
    let index = 0;
    let voucherPrice = Number(input[index++]);
    let command = input[index];
    let movies = 0;
    let price = 0;
    let products = 0;
    while(command != "End"){
        let length = command.length
        if(length > 8){
            price += command.charCodeAt(0) + command.charCodeAt(1);
            if(price > voucherPrice){
                break;
            }
            movies++
        }else{
            price += command.charCodeAt(0);
            if(price > voucherPrice){
                break;
            }
            products++
        }
        command = input[++index];
    }
    console.log(movies);
    console.log(products);

}
cinemaVoucher(["1500",
"Avengers: Endgame",
"Bohemian Rhapsody",
"Deadpool 2",
"End"])