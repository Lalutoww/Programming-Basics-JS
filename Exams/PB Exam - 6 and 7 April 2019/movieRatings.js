function movieRatings(input){
    let index = 0;
    let movieCount = Number(input[index++])
    let movie = "";
    let bestMovie = "";
    let worstMovie = "";
    let rating = 0;
    let totalRating = 0;
    let min = Number.MIN_SAFE_INTEGER;
    let max = Number.MAX_SAFE_INTEGER;
    for(i = 1; i <= movieCount; i++){
        movie = input[index++];
        rating = Number(input[index++]);
        if(rating > min){
            min = rating;
            bestMovie = movie;
        }if(rating < max){
                max = rating;
                worstMovie = movie;
        }
        totalRating += rating;
    }
    console.log(`${bestMovie} is with highest rating: ${min.toFixed(1)}`);
    let avg = totalRating / movieCount;
    console.log(`${worstMovie} is with lowest rating: ${max.toFixed(1)}`);
    console.log(`Average rating: ${avg.toFixed(1)}`);
}
movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])
