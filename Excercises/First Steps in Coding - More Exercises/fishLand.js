function fishLand(input){
    let skumriqKgPrice = Number(input[0]);
    let cacaKgPrice = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamud = (skumriqKgPrice + skumriqKgPrice * 0.60) * palamudKg;
    let safrid = (cacaKgPrice + cacaKgPrice * 0.80) * safridKg;
    let midi = midiKg * 7.50;
    let totalSum = palamud + safrid + midi
    console.log(totalSum.toFixed(2));

}
fishLand([7.79, 5.35, 9.3, 0, 0])