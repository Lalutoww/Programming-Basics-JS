function oscarsCeremony(input){
    let placeRent = Number(input[0]);
    let statues = placeRent * 0.7;
    let cathering = statues * 0.85;
    let sound = cathering / 2;
    let totalSum = placeRent + statues + cathering + sound;
    console.log(totalSum.toFixed(2))
}
oscarsCeremony([3500])