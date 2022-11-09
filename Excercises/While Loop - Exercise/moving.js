function moving(input){
let index = 0;
let spaceWidth = Number(input[index]);
index++;
let spaceLength = Number(input[index]);
index++
let spaceHeight = Number(input[index]);
index++
let freeSpace = spaceWidth * spaceLength * spaceHeight;
let boxes = 0;
let sum = 0;
let command = input[index]
while(command !== "Done"){
    command = input[index]
    boxes = Number(input[index]);
    if(command === "Done"){
        break;    
    }else{
        sum+= boxes;
    }
    index++;
    if(sum > freeSpace){
        let diff = Math.abs(sum-freeSpace);
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
        break;
    }
}

if(command === "Done"){
    let diff = Math.abs(sum-freeSpace);
    console.log(`${diff} Cubic meters left.`);
}

}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
