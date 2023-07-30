function sumNumbers(input){
    let firstNum = Number(input[0])
    let index = 1;
    let currentNum = Number(input[index])
    let sum = 0;
    while(firstNum > sum){
        currentNum = Number(input[index])
        sum += currentNum
        index++
    }
    console.log(sum)
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

