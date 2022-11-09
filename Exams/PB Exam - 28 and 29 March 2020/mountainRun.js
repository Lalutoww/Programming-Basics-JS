function mountainRun(input){
    let recordInSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let secondsForOneMeter = Number(input[2]);

    let personalSeconds = distance * secondsForOneMeter;
    let slowSeconds =  Math.floor((distance / 50)) * 30;
    let totalSeconds = personalSeconds + slowSeconds;
    let difference = Math.abs(totalSeconds - recordInSeconds);

    if(recordInSeconds > totalSeconds){
        console.log(`Yes! The new record is ${totalSeconds.toFixed(2)} seconds.`);
    } else{
        console.log(`No! He was ${difference.toFixed(2)} seconds slower.`);
    }
}
mountainRun(["10164",
"1400",
"25"])


