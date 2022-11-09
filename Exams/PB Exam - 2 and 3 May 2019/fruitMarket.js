function fruitMarket(input) {
let strawberryPrice = Number(input[0]);
let bananasKG = Number(input[1]);
let orangesKG = Number(input[2]);
let raspberryKG = Number(input[3]);
let strawberryKG = Number(input[4])

let raspberryPrice = strawberryPrice / 2;
let orangesPrice = raspberryPrice * 0.6;
let bananasPrice = raspberryPrice * 0.2;

let total = (strawberryPrice * strawberryKG) + (bananasKG * bananasPrice) + (raspberryKG * raspberryPrice) + (orangesKG * orangesPrice);

console.log(total.toFixed(2));

}
fruitMarket([63.5,3.57,6.35,8.15,2.5])