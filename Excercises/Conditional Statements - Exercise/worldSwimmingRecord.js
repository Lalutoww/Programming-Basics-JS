function worldSwimmingRecord(input) {
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let slow = Math.floor((distance / 15)) * 12.5
    let totalTime = (distance * timeForMeter) + slow;
    let diff = Math.abs(totalTime - worldRecord)

    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }

}
worldSwimmingRecord(["10464",
    "1500",
    "20"
])