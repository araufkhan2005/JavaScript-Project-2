let num:number = 2916;
let count:number = 0;

while (num > 0) {
    num = (num - (num % 10)) / 10;
    count++;
}
console.log(`Digits in Number are:- ${count}`);
