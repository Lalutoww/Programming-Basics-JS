function time15(input) {
    let h = Number(input[0]);
    let m = Number(input[1]);

    let totalTimeInMinutes = h * 60 + m + 15;
    let calcH = Math.floor(totalTimeInMinutes / 60)
    let calcM = totalTimeInMinutes % 60;

    if (calcH >= 24) {
        calcH = calcH - 24;
    }
    if (calcM < 10) {
        console.log(`${calcH}:0${calcM}`);
    } else {
        console.log(`${calcH}:${calcM}`);
    }

}
time15(["12", "49"])