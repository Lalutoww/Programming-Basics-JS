function yardGreening(input) {
   let m2 = Number(input[0]);
   let firstPrice = m2 * 7.61;
   let discount = firstPrice * 0.18;
   let finalPrice = firstPrice - discount;

   console.log(`The final price is: ${finalPrice} lv.`);
   console.log(`The discount is: ${discount} lv.`);
}
