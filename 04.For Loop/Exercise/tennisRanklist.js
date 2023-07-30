function tennisRanklist(input){
    let index = 0;
    let competitionCount = Number(input[index]);
    index++
    let finalPoints = Number(input[index]);
    let startingPoints = Number(input[index]);
    index++
    let winnerCount = 0;

    for(let i = 1; i<= competitionCount; i++){
        let status = input[index];
        switch(status){
            case "W": finalPoints += 2000; winnerCount++; break;
            case "F": finalPoints += 1200; break;
            case "SF": finalPoints += 720; break;
        }
        index++
    }
    console.log(`Final points: ${finalPoints}`)
    console.log(`Average points: ${Math.floor((finalPoints - startingPoints) / competitionCount)}`)
    console.log(`${((winnerCount / competitionCount) * 100).toFixed(2)}%`)
}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

