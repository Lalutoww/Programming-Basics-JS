function tradeComissions(input){
    let city = input[0];
    let sales = Number(input[1]);
    let comission = 0;
    let check = true;
    if(sales >= 0 && sales <= 500){
        switch(city){
            case "Sofia": comission = sales * 0.05; break;
            case "Varna": comission = sales * 0.045; break;
            case "Plovdiv": comission = sales * 0.055; break;
            default: console.log("error"); check = false;
        }
    }else if(sales > 500 && sales <= 1000){
        switch(city){
            case "Sofia": comission = sales * 0.07; break;
            case "Varna": comission = sales * 0.075; break;
            case "Plovdiv": comission = sales * 0.08; break;
            default: console.log("error"); check = false;
        }
    }else if(sales > 1000 && sales <= 10000){
        switch(city){
            case "Sofia": comission = sales * 0.08; break;
            case "Varna": comission = sales * 0.1; break;
            case "Plovdiv": comission = sales * 0.12; break;
            default: console.log("error"); check = false;
        }
    }else if(sales > 10000){
        switch(city){
            case "Sofia": comission = sales * 0.12; break;
            case "Varna": comission = sales * 0.13; break;
            case "Plovdiv": comission = sales * 0.145; break;
            default: console.log("error"); check = false;
        }
    } else if(sales < 0){
        console.log("error");
    }
    if(sales > 0 && !check === false){
        console.log(comission.toFixed(2));
    }
}
tradeComissions(["Plovdiv",
"1500"])




