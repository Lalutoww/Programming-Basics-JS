function agencyProfit(input){
    let companyName = input[0];
    let oldTicketNumber = Number(input[1]);
    let childTicketNumber = Number(input[2]);
    let priceOldTicket = Number(input[3]);
    let taxes = Number(input[4]);

    let priceChildTicket = priceOldTicket * 0.3;
    let totalSum = ((priceOldTicket + taxes) * oldTicketNumber + (priceChildTicket + taxes) * childTicketNumber) * 0.2;

    console.log(`The profit of your agency from ${companyName} tickets is ${totalSum.toFixed(2)} lv.`);
}
agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])

