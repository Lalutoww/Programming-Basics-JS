function lunchBreak(input) {
    let name = input[0];
    let showDuration = Number(input[1]);
    let restTime = Number(input[2]);

    let lunchBreak = restTime / 8;
    let freeTime = restTime / 4;
    let totalTime = restTime - (lunchBreak + freeTime);
    let timeLeft = Math.abs(totalTime - showDuration);

    if (totalTime < showDuration) {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(timeLeft)} more minutes.`);
    } else {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    }
}
lunchBreak(["Game of Thrones",
    "60",
    "96"
])