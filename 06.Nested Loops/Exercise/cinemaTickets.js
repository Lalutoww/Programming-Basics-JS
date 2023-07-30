function cinemaTickets(input) {
   let index = 0;
   let command = input[index];
   let movie = '';
   let freeSpaces = 0;
   let studentCount = 0;
   let standartCount = 0;
   let kidCount = 0;
   let totalTickets = 0;
   let tickets = 0;
   let studentTotal = 0;
   let standartTotal = 0;
   let kidTotal = 0;
   while (command !== 'Finish') {
      movie = input[index++];
      freeSpaces = +input[index++];
      let typeOfTicket = input[index];
      standartCount = 0;
      studentCount = 0;
      kidCount = 0;
      while (typeOfTicket !== 'End') {
         if (typeOfTicket === 'Finish') {
            break;
         }
         switch (typeOfTicket) {
            case 'standard':
               standartCount++;
               break;
            case 'student':
               studentCount++;
               break;
            case 'kid':
               kidCount++;
               break;
         }
         tickets = standartCount + studentCount + kidCount;
         if (tickets === freeSpaces) {
            break;
         }

         index++;
         typeOfTicket = input[index];
      }
      console.log(
         `${movie} - ${((tickets / freeSpaces) * 100).toFixed(2)}% full.`
      );
      totalTickets += tickets;
      studentTotal += studentCount;
      standartTotal += standartCount;
      kidTotal += kidCount;

      index++;
      command = input[index];
   }
   console.log(`Total tickets: ${totalTickets}`);
   console.log(
      `${((studentTotal / totalTickets) * 100).toFixed(2)}% student tickets.`
   );
   console.log(
      `${((standartTotal / totalTickets) * 100).toFixed(2)}% standard tickets.`
   );
   console.log(
      `${((kidTotal / totalTickets) * 100).toFixed(2)}% kids tickets.`
   );
}
