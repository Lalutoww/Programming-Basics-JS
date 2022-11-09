function trainingLab(input) {
    let h = Number(input[0]);
    let w = Number(input[1]);

    let columns = Math.trunc((w * 100 - 100) / 70)
    let lines = Math.trunc(h * 100 / 120)
    let freeSpace = Math.trunc(columns * lines - 3)

    console.log(Math.trunc(freeSpace))
}
trainingLab([8.4, 5.2])