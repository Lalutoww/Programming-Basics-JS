function histogram(input) {
    let numCount = Number(input[0]);
    let index = 1;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    for (let i = 0; i <= 1000; i++) {
        let num = Number(input[index])
        if (num < 200) {
            count1++
        } else if (num >= 200 && num <= 399) {
            count2++
        } else if (num >= 400 && num <= 599) {
            count3++
        } else if (num >= 600 && num <= 799) {
            count4++
        } else if (num >= 800) {
            count5++
        }
        index++
    }
    let p1 = count1 / numCount * 100
    let p2 = count2 / numCount * 100
    let p3 = count3 / numCount * 100
    let p4 = count4 / numCount * 100
    let p5 = count5 / numCount * 100
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}
histogram(["7",
    "800",
    "801",
    "250",
    "199",
    "399",
    "599",
    "799"
])