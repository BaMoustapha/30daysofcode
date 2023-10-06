//Declare a variable named challenge 

let challenge = '30 Days Of JavaScript';


//length

console.log(challenge.length)


//toUpperCase() method

console.log(challenge.toUpperCase)


//toLowerCase() method

console.log(challenge.toLowerCase)

//substring() method

var firstWord = challenge.substring(0, challenge.indexOf(' '));
console.log(firstWord); 

console.log(challenge.substring(2,7))


// includes() method

console.log(challenge.includes('Script')) 


//split() method

console.log(challenge.split())
console.log(challenge.split(' '))


let companies = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(companies.split(',')) 

console.log(companies.split(', ')) 


//replace() method

console.log(challenge.replace('JavaScript', 'Python')) 


//charAt() method.

console.log(challenge.charAt(15));


//indexOf

console.log(challenge.indexOf('J'));

console.log(challenge.indexOf('a'));

console.log(challenge.indexOf('a'));



//lastIndexOf

console.log(challenge.lastIndexOf('a'))


//indexOf

let sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.indexOf('because'));


//search method

console.log(sentence.search('because'));


//trim() method

let str = ' 30 Days Of JavaScript '

console.log(str.trim());



//startsWith() method

console.log(challenge.startsWith('30 Days Of JavaScript'))


//endsWith() method

console.log(challenge.endsWith('30 Days Of JavaScript'))


//match() method
console.log(challenge.match(/a/g));


//concat() method

var str1 = '30 Days of ';
var str2 = 'JavaScript';
var concat = str1.concat(str2);
console.log(concat);


//repeat() method

console.log(challenge.repeat(2));