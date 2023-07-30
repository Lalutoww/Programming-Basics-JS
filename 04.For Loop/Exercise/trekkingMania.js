function trekkingMania(input) {
    let index = 0;
    let groupCount = Number(input[index]);
    index++
    let musalaGroup = 0;
    let monblanGroup = 0;
    let kilimanjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;
    let totalPeople = 0;

    for (let i = 1; i <= groupCount; i++) {
        let peopleInGroup = Number(input[index]);
        totalPeople += peopleInGroup;

        if (peopleInGroup <= 5) {
            musalaGroup += peopleInGroup
        } else if (peopleInGroup >= 6 && peopleInGroup <= 12) {
            monblanGroup += peopleInGroup
        } else if (peopleInGroup >= 13 && peopleInGroup <= 25) {
            kilimanjaroGroup += peopleInGroup
        } else if (peopleInGroup >= 26 && peopleInGroup <= 40) {
            k2Group += peopleInGroup
        } else {
            everestGroup += peopleInGroup
        }
        index++
    }
    let musalaPercent = (musalaGroup / totalPeople) * 100;
    let monblanPercent = (monblanGroup / totalPeople) * 100;
    let kilimanjaroPercent = (kilimanjaroGroup / totalPeople) * 100;
    let k2Percent = (k2Group / totalPeople) * 100;
    let everestPercent = (everestGroup / totalPeople) * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);

}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
])