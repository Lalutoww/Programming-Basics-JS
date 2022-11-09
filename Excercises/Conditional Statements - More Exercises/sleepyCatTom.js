function sleepyCatTom(input){
    let daysOff = Number(input[0]);
    let workDays = 365 - daysOff;
    let totalMinutes = daysOff * 127 + workDays * 63;
    let minutesLeft = 30000 - totalMinutes;
    let hours = Math.floor(Math.abs(minutesLeft / 60));
    let minutes = Math.abs((minutesLeft % 60));

    if (totalMinutes > 30000){
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }   
}
sleepyCatTom(["20"])