function pipesInPool(input) {
    let volume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let hours = Number(input[3]);

    let p1All = p1 * hours
    let p2All = p2 * hours
    let pipesTogether = p1All + p2All
    let poolLeft = Math.abs(volume - pipesTogether)
    let poolPercent = (pipesTogether / volume) * 100
    let p1Percent = (p1All / pipesTogether) * 100
    let p2Percent = (p2All / pipesTogether) * 100

    if (poolLeft <= volume) {
        console.log(`The pool is ${poolPercent}% full. Pipe 1: ${p1Percent}%. Pipe 2: ${p2Percent}%.`)
    } else {
        console.log(`For ${hours} hours the pool overflows with ${poolLeft.toFixed(2)} liters.`)
    }

}
pipesInPool(['100', "100", "100", "2.5"])