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

//d
heigthDifference = Number(heigthDifference);
if (heigthDifference >= 10){
    console.log("Chiều cao hợp lí")
}

BMI = Number(BMI);
if (BMI < 18.5) {
    console.log("Gầy")
}
else if (18 < BMI < 24.9 ) {
    console.log("Bình thường")
}
else if(25 < BMI < 29.9) {
    console.log("Tăng cân")
}
else if(30 < BMI < 34.9) {
    console.log("Béo phì độ 1")
}
else if(35 < BMI < 39.9) {
    console.log("Béo phì độ 2")
}
else if(BMI >= 40) {
    console.log("Béo phì độ 3")
}