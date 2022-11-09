function minNumber(input){
    let index = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let command = input[index];

    while(command !== "Stop"){
        command = Number(input[index])
        if(command < min){
            min = command;
        }
        command = input[index];
        index++
    }
    console.log(min)

}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
