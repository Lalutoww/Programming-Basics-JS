function cinemaTickets(input){
    let index = 0;
    let command = input[index++];
    let standardTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0;
    let movieName = command;
    while(movieName !== "Finish"){
        let people = 0;
        let freeSpace = Number(input[index++]);
       for(let i = 1; i <= freeSpace; i++){
            command = input[index++]
            if(command === "standard"){
                standardTickets++
            }else if(command === "student"){
                studentTickets++
            }else if(command === "kid"){
                kidTickets++
            }else if(command === "End"){
                break;
            }
            people++
        }
        console.log(`${movieName} - ${((people / freeSpace) * 100).toFixed(2)}% full.`);
        command = input[index++]
        movieName = command;
    }
    let totalTickets = standardTickets + studentTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
