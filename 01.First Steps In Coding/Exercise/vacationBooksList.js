function vacationBookList(input){
    let pageNumber = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);
    
    let hoursNeeded = (pageNumber / pagesForHour) / days;
    console.log(hoursNeeded);

}
vacationBookList([432, 15, 4])