function oldBooks(input) {
    let index = 0;
    let bookName = input[index];
    index++
    let command = input[index]
    bookCount = 0;
    let isFound = true;

    while (bookName !== command) {
        if (command === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${bookCount} books.`);
            isFound = false;
            break;

        }
        index++
        bookCount++
        command = input[index]
    }
    if (isFound) {
        console.log(`You checked ${bookCount} books and found it.`);
    }
}
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"
])