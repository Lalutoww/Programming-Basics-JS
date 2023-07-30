function traveling(input) {
   let destination = input[0];
   let minBudget = input[1];
   let savedMoney = 0;
   let index = 1;

   while (destination !== 'End') {
      index++;
      while (savedMoney < minBudget) {
         savedMoney += Number(input[index]);
         index++;
         if (savedMoney >= minBudget) {
            console.log(`Going to ${destination}!`);
            savedMoney = 0;
            destination = input[index];
            index++;
            minBudget = input[index];
            break;
         }
      }
   }
}
