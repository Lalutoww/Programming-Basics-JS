function trainTheTrainers(input) {
   let index = 0;
   let countJury = Number(input[index]);
   index++;
   let command = input[index];
   index++;
   let countOfGrade = 0;
   let avgGrade = 0;
   while (command !== 'Finish') {
      countOfGrade++;
      let presentName = command;
      let tempAvgGrade = 0;
      for (let i = 1; i <= countJury; i++) {
         let tempGrade = Number(input[index]);
         index++;
         tempAvgGrade += tempGrade;
      }
      tempAvgGrade = tempAvgGrade / countJury;
      let presentationRulst = `${presentName} - ${tempAvgGrade.toFixed(2)}.`;
      console.log(presentationRulst);
      avgGrade += tempAvgGrade;
      command = input[index];
      index++;
   }
   avgGrade = avgGrade / countOfGrade;
   console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
