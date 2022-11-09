function evenPowersOf2(input){
    let result = 0;
    for(let i = 0; i<= Number(input[0]); i+= 2 ){
        result = Math.pow(2, i);
        console.log(result)
    }
}
evenPowersOf2([7])