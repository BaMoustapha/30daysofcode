// Get the user's age using prompt
const age = Number(prompt("Enter your age:"));

// Check if the user is 18 or older
if (age >= 18) {
    console.log("You are old enough to drive.");
  } else {
    const yearsUntil18 = 18 - age;
    console.log(`You need to wait ${yearsUntil18} more years to drive.`);
  }



var myAge = Number(prompt("My age:"));

var yourAge = Number(prompt("Enter your age:"));

let yourAge = 30;
if (myAge > yourAge) {
    console.log(`i'm older than you with ${myAge - yourAge}`)
} else {
    console.log(`you are ${yourAge - myAge} years older than me`)
}


let a = 4
let b = 3

if (a > b) {
    console.log("a is greater than b");
  } else {
    
    console.log(`a is less than b`);
  }

//ternary
(a > b) ? console.log("a is greater than b"): console.log("a is less than b");

//even and odd
let num = Number(prompt("enter number to kno if it's even/odd"))
if (num % 2 === 0) {
    console.log(`${num} is an even number`)
} else if (num % 2 !== 0) {
    console.log(`${num} is an odd number`)
}

