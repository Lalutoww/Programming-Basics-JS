function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);

    // steni

    let stena = x * y;
    let prozorec = 1.5 * 1.5;
    let bothStranichni = 2 * stena - 2 * prozorec;
    let zStena = x * x;
    let vhod = 1.2 * 2;
    let obshtoZiP = 2 * zStena - vhod; 
    let zelenaBoq = (bothStranichni + obshtoZiP) / 3.4;
    console.log(zelenaBoq.toFixed(2));

    // pokriv
    let pravougulnika = 2 * (x * y);
    let triangles = 2 * (x * z / 2);
    let chervenaBoq = (pravougulnika + triangles) / 4.3
    console.log(chervenaBoq.toFixed(2));
}   
housePainting([10.25, 15.45, 8.88])