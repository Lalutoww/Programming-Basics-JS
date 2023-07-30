function cake(input){
let index = 0;
let cakeSize1 = Number(input[index]);
index++
let cakeSize2 = Number(input[index]);
index++
let cakePieces = cakeSize1 * cakeSize2;
let grabPieces = Number(input[index]);
let command = input[index];
index++
let isLeft = true;

while(grabPieces > cakePieces || command !== "STOP"){
    cakePieces-= grabPieces;
    if(cakePieces < 0){
        isLeft = false;
        break;
    }
    grabPieces = Number(input[index]);
    command = input[index];
    index++
}
    if(isLeft){
        console.log(`${cakePieces} pieces are left.`);
    }else{
        console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
    }

}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])


