function maxNumber(input){
    let index = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let command = input[index];
    while(command !== "Stop"){
        command = Number(input[index]);
        if(command > max){
            max = command;
        }
        command = input[index]
        index++
    }
    console.log(max)
}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])
