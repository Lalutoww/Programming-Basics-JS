function combinations(input) {
   let num = Number(input[0]);
   let counter = 0;
   for (let a = 0; a <= num; a++) {
      for (let b = 0; b <= num; b++) {
         for (let c = 0; c <= num; c++) {
            let res = a + b + c;
            if (res === num) {
               counter++;
            }
         }
      }
   }
   console.log(counter);
}
