function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrval = Number(input[3]);

    let timeExam = hourExam * 60 + minExam;
    let timeArrival = hourArrival * 60 + minArrval;
    let diff = Math.abs(timeExam - timeArrival);

    let hours = Math.floor((diff) / 60);
    let minutes = diff % 60;
    if (timeExam < timeArrival) {
        console.log("Late");
        if (hours < 1) {
            console.log(`${minutes} minutes after the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`)
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else if (timeExam === timeArrival || timeExam - timeArrival <= 30) {
        console.log("On time");
        if (timeExam - timeArrival !== 0) {
            console.log(`${minutes} minutes before the start`)
        }
    } else if (timeExam > timeArrival) {
        console.log("Early")
        if (hours < 1) {
            console.log(`${minutes} minutes before the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`)
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }
}
onTimeForTheExam(["9",
    "30",
    "8",
    "59"
])