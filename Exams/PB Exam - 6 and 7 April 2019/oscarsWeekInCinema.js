function oscarsWeekInCinema(input){
    let movieName = input[0];
    let movieTheater = input[1];
    let ticketNumber = Number(input[2]);
    let price = 0;
    switch(movieName){
        case "A Star Is Born":
            switch (movieTheater) {
                case "normal":
                    price = 7.50;
                    break;
                case "luxury":
                    price = 10.50;
                    break;
                case "ultra luxury":
                    price = 13.50;
                    break;
            }
        break;
        case "Bohemian Rhapsody":
            switch (movieTheater) {
                case "normal":
                    price = 7.35;
                    break;
                case "luxury":
                    price = 9.45;
                    break;
                case "ultra luxury":
                    price = 12.75;
                    break;
            }
        break;
        case "Green Book":
            switch (movieTheater) {
                case "normal":
                    price = 8.15;
                    break;
                case "luxury":
                    price = 10.25;
                    break;
                case "ultra luxury":
                    price = 13.25;
                    break;
            }
        break;
        case "The Favourite":
            switch (movieTheater) {
                case "normal":
                    price = 8.75;
                    break;
                case "luxury":
                    price = 11.55;
                    break;
                case "ultra luxury":
                    price = 13.95;
                    break;
            }
        break;
    }
    let totalPrice = price * ticketNumber;
    console.log(`${movieName} -> ${totalPrice.toFixed(2)} lv.`)
}
oscarsWeekInCinema(["A Star Is Born",
"luxury",
"42"])