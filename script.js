// 1a.
let randomNum = Math.random()
console.log(randomNum);
randomNum *= 5;
console.log(randomNum);
randomNum = Math.floor(randomNum);
console.log(randomNum);
randomNum++;
console.log(randomNum);
// 1b.
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else if (randomNum) {
    console.log("Equal to 2 or 3");
} if (randomNum) {
    console.log("Equal to 1");
}
// 1c.
if (randomNum === 1 || 2 || 4 || 5 ) {
    console.log("Not equal to 3")
}
// 1d.
if (randomNum === 1 || 2 || 4 ) {
    console.log("Not equal to 3 AND not equal to 5");
}
// 1e.
if (randomNum === 2 || 4) {
    console.log("Equal to 2 OR equal to 4");
}