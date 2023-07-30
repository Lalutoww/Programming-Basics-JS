function specialNumbers(input) {
   let num = +input[0];
   let print = '';

   for (let i = 1111; i <= 9999; i++) {
      let n = '' + i;
      if (
         num % n.charAt(0) === 0 &&
         num % n.charAt(1) === 0 &&
         num % n.charAt(2) === 0 &&
         num % n.charAt(3) === 0
      ) {
         print += i + ' ';
      }
   }
   console.log(print);
}
