function graduation(input){
    let index = 0;
    let name = input[index];
    index++
    let droppedOut = 0;
    let grade = 0;
    let sum = 0;
    let isDropped = false
    while(index < input.length){
        let mark = Number(input[index]);
        grade++;
        if(mark < 4){
            droppedOut++
        }if(droppedOut >= 1){
            console.log(`${name} has been excluded at ${grade} grade`);
            isDropped = true;
            break;
        }
        sum+=mark;
        index++
    }
    let average = sum / grade;
    if(!isDropped){
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }

}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
