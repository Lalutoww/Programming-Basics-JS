function vegetableMarket(input) {
  let vegetablesLv = Number(input[0]);
  let fruitLv = Number(input[1]);
  let vegetablesKG = Number(input[2]);
  let fruitKG = Number(input[3]);
  let total = vegetablesLv * vegetablesKG + fruitKG * fruitLv;
  let euro = total / 1.94;

  console.log(euro.toFixed(2));
}
vegetableMarket([1.5, 2.5, 10, 10]);
