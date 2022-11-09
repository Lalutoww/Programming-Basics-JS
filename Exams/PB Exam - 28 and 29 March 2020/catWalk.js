function catWalk(input){
    let walkMinutes = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let caloriesConsumed = Number(input[2]);

    let caloriesBurned = walksPerDay * walkMinutes * 5;

    if(caloriesBurned >= caloriesConsumed / 2){
       console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`);
    }
}
catWalk(["40", "2", "300"])