function salary(input){
    let tabsOpened = Number(input[0]);
    let salary = Number(input[1]);
    let index = 2;
    let removeMoney = 0;
    
    for(let i = 0; i < tabsOpened; i++ ){
        let website = input[index];
        switch(website){
            case "Facebook": removeMoney += 150; break;
            case "Instagram": removeMoney += 100; break;
            case "Reddit": removeMoney += 50; break;
        }
     index++
    }
    let diff = Math.abs(salary - removeMoney)
    if (removeMoney >= salary){
        console.log(`You have lost your salary.`);
    }else{
        console.log(`${diff}`)
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])



