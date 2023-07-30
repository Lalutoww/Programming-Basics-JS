function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let evaluators = Number(input[2])
    let index = 2
    index++
    let isNominated = false;

    for (let i = 0; i < evaluators; i++) {
        let currentName = input[index];
        index++
        let tempPoints = Number(input[index]);
        index++
        let res = (currentName.length * tempPoints) / 2;
        academyPoints += res
        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            isNominated = true;
            break;
        }
    }
    let diff = Math.abs(academyPoints - 1250.5)
    if (isNominated === false) {
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"
])