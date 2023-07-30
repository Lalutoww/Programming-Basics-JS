function examPreparation(input) {
    let index = 0;
    let badMarksNeeded = Number(input[index]);
    let badMarkCount = 0;
    index++
    let taskName = input[index];
    let lastTaskName = taskName;
    index++
    let sum = 0;
    let taskCount = 0;
    let isDropped = false;
    while (taskName !== "Enough") {
        let mark = Number(input[index])
        lastTaskName = taskName;
        index++
        if (mark <= 4) {
            badMarkCount++
        }
        if (badMarkCount === badMarksNeeded) {
            console.log(`You need a break, ${badMarkCount} poor grades.`);
            isDropped = true;
            break;
        }
        sum += mark;
        taskCount++
        taskName = input[index]
        index++
    }
    let average = sum / taskCount;

    if (!isDropped) {
        console.log(`Average score: ${average.toFixed(2)}`)
        console.log(`Number of problems: ${taskCount}`);
        console.log(`Last problem: ${lastTaskName}`);
    }
}
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
])