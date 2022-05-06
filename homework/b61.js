// a
let firstPlayer = prompt ("Please enter your name");
let yourHeight = prompt("Please enter your height (cm)");
let subPlayer = prompt ("Please enter your partner's height (cm)");
let yourWeight = prompt("Please enter your weight (kg)");

// b
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

//c
yourHeight = Number(yourHeight);
subPlayer = Number(subPlayer);
console.log(`Chiều cao của bạn đã nhập là ${yourHeight} , chiều cao của ny bạn đã nhập là ${subPlayer}`);

heigthDifference = Number(heigthDifference);
totalHeight = Number(totalHeight);
console.log(`Độ chênh lệch chiều cao của 2 người là ${heigthDifference}, tổng chiều cao 2 người là ${totalHeight}`);

BMI = Number(BMI);
console.log(`Giá trị BMI sau khi tính toán là: ${BMI}`);