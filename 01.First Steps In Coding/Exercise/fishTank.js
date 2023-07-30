function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volumeInCm3 = length * width * height // V = a*b*c
    let volumeInLiters = volumeInCm3 / 1000
    let percentFraction = percent / 100
    let freeSpace = volumeInLiters * (1 - percentFraction)
    console.log(freeSpace);  

}
fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
)