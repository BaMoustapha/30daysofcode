console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
 
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
)

let str = '10';
let num = 10;

if (typeof str === 'number') {
    console.log('The typeof is exactly equal to 10.');
  } else {
    
    var convertedNum = parseInt(str, 10); 
    if (convertedNum === num) {
      console.log('The converted value is exactly equal to 10.');
    } else {
      console.log('The converted value is NOT exactly equal to 10.');
    }
  }

if (parseFloat(9.8) === 10) {
    console.log('equal to 10')
} else {
    parseFloat(9.8) == 10;
    console.log('equal to 10')
}

console.log(parseFloat(9.8));

var word1 = 'python';
var word2 = 'jargon';

if (word1.includes('on') && word2.includes('on')) {
  console.log('Both words contain the substring "on".');
} else {
  console.log('At least one of the words does not contain the substring "on".');
}

let sentence = "I hope this course is not full of jargon"

if (sentence.includes('jargon')) {
  console.log('The word jargon is include');
} else {
  console.log('The word jargon is not include.');
}

let randomNumber = Math.floor(Math.random() * 101); // Generates a random integer between 0 and 100
console.log(randomNumber);

var min = 50;  
var max = 100; 

var randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber1);


var randomNumber2 = Math.floor(Math.random() * 256); 
console.log(randomNumber2);

var word = 'JavaScript';
var randomIndex = Math.floor(Math.random() * word.length);  1
var randomCharacter = word[randomIndex]; 
console.log(randomCharacter);

var sentence1 = 'You cannot end a sentence with because because because is a conjunction';

// Find the starting index of the first "because"
var startIndex = sentence1.indexOf('because');

// Find the ending index of the third "because" (add the length of the phrase)
var endIndex = startIndex + 'because because because'.length;

// Use substr to extract the phrase
var slicedPhrase = sentence1.substring(startIndex, endIndex - startIndex);

console.log(slicedPhrase);


const sentence3 = "Love is the best thing in this world. Some found their love and some are still looking for their love.";

const words = sentence3.split(" ");

let count = 0;
for (const word of words) {
  if (word === "love") {
    count += 1;
  }
}

console.log(count);


const sentence4 = "You cannot end a sentence with because because because is a conjunction";

const matches = sentence.match(/because/g);

const count1 = matches.length;

console.log(count1);


let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Extract numbers from the text
let numbers = text.match(/\d+/g).map(Number);

// Calculate total annual income
let salaryPerMonth = numbers[0];
let annualBonus = numbers[1];
let onlineCoursesPerMonth = numbers[2];

let totalAnnualIncome = (salaryPerMonth * 12) + annualBonus + (onlineCoursesPerMonth * 12);

console.log(`The total annual income is ${totalAnnualIncome} euro.`);