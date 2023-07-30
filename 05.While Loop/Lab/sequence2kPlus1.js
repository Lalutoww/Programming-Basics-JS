function sequence2kPlus1(input){
    let n = Number(input[0])
    let currentNum = 1;
    while(currentNum <= n){
        console.log(currentNum);
        currentNum = currentNum * 2 + 1;
    }
}
sequence2kPlus1(["31"])