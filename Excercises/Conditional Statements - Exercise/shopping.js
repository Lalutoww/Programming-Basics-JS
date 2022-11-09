function shopping(input) {
    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let vCardPrice = videoCardCount * 250;
    let processorPrice = processorCount * (vCardPrice * 0.35);
    let ramPrice = ramCount * (vCardPrice * 0.10);
    let totalPrice = vCardPrice + processorPrice + ramPrice;

    if (videoCardCount > processorCount) {
        totalPrice = totalPrice * 0.85
    }

    let diff = Math.abs(totalPrice - budget)

    if (totalPrice <= budget) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}
shopping(["920.45",
    "3",
    "1",
    "1"
])