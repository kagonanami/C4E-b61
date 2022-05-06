// a
let firstPlayer = prompt ("Please enter your name");
let yourHeight = prompt("Please enter your height (cm)");
let subPlayer = prompt ("Please enter your partner's height (cm)");
let yourWeight = prompt("Please enter your weight");

// b, c
// note
yourHeight = Number(yourHeight);
subPlayer = Number(subPlayer);
let totalHeight = yourHeight + subPlayer
console.log(totalHeight);

// note
yourHeight = Number(yourHeight);
subPlayer = Number(subPlayer);
let heigthDifference = yourHeight - subPlayer
console.log(heigthDifference);

// note
yourWeight = Number(yourWeight);
yourHeight = Number(yourHeight);
let BMI = yourWeight / (yourHeight * 2);
console.log(BMI);
