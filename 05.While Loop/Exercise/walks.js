function walks(input) {
    let index = 0;
    let dailySteps = 10000;
    let steps = Number(input[index]);
    let sum = 0;
    let command = input[index]
    index++

    while (sum < dailySteps && command !== "Going home") {
        sum += steps
        steps = Number(input[index])
        command = input[index]
        index++
    }

    if (command === "Going home") {
        steps = Number(input[index]);
        sum += steps;
    }

    let diff = Math.abs(sum - dailySteps)

    if (sum >= dailySteps) {
        console.log(`Goal reached! Good job!`)
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }
}
walks(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"
])