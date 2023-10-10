//for

var i = 0;

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//while-loop

while (i < 10) {
    i++;
    console.log(i);
}

//do-while

do {
    i++;
    console.log(i)
} while (i < 10)


//loop 10-0
//for-loop
for (let i = 10; i <= 10; i--) {
    console.log(i);
}

//while-loop
var i = 10;
while (i > 0) {
    i--;
    console.log(i)
}

//do-while loop
let i = 10;
do {
    i--;
    console.log(i)
} while (i > 0)

let n = Number(prompt("enter number"));
for (let i = 0; i <= n; i++) {
    console.log(i);
}

let str = "";
for (let i = 0; i < 7; i++) {
    str += "#";
    console.log(str)
}

//multiplication
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

//power of 2,3
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}

//print even numbers from 0-100;
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//print odd numbers
for (i = 0; i <= 100; i++) {
    if (i % 2 > 0) {
        console.log(i)
    }
}

//print prime numbers
for (let i = 0; i <= 100; i++) {
    for (let k = 2; k < i; k++) {
        if (i % k === 0 && i > 1) {
            console.log(i)
        }
    }
}


//sum of all numbers
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum)

//sum even and odd

var sumEven = 0;
var sumOdd = 0;

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

console.log("Sum of all even numbers: " + sumEven);
console.log("Sum of all odd numbers: " + sumOdd);


let sumEven = 0;
let sumOdd = 0;

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

console.log([sumEven, sumOdd]);

let randomNumbers = [];


for(let i = 0; i <= 5; i++){
    randomNumbers.push(Math.random());
}

console.log(randomNumbers);

let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randChars = "";
for (let i = 0; i < r; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randChars += chars[random];
}
console.log(randChars);