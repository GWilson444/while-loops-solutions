console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");

let num1 = -10;
while(num1 < 20) {
	console.log(num1);
	num1++;
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");

let num2 = 10;
while(num2 <= 40) {
	console.log(num2);
	num2 += 2;
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");

let num3 = 301;
while(num3 <= 333) {
	console.log(num3);
	num3 += 2;
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY BOTH 5 AND 3, BETWEEN 5 AND 50");

let num4 = 5;
while(num4 <= 50) {
	if(num4 % 5 === 0 && num4 % 3 === 0) {
		console.log(num4);
	}
	num4++;
}