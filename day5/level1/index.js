
//Declare an empty array
const emptyArray = [];


//Declare an array with more than 5 number of elements
const fruitsArray = ["apple", "banana", "orange", "mango", "pineapple"];


//Find the length of your array
const lengthOfArray = fruitsArray.length;

console.log(lengthOfArray);


//Get the first item, the middle item and the last item of the array
let firstItem = console.log(fruitsArray[0]);
let middleItem = console.log(fruitsArray[3]);
let lastItem = console.log(fruitsArray[food.length - 1]);


//mixedDataTypes
var mixedDataTypes = [1, 'Hello', true, null, undefined, {name: 'Moustapha'}];
console.log(mixedDataTypes.length);


//Declare an array variable name itCompanies
let Companies = ["google", "microsoft", "oracle", "amazon", "ibm", "oracle", "apple"];
console.log(Companies);
console.log(Companies.length);
console.log(Companies[0]);
console.log(`Middle company: ${Companies[Math.floor(Companies.length / 2)]}`);
console.log(Companies[4]);
console.log(Companies[Companies.length - 1]);
let searchCompany = prompt("enter company to search");
if (Companies.includes(searchCompany)) {
    console.log(searchCompany)
} else {
    console.log("company not found")
}


// Print out each company
Companies.forEach(company => {
    console.log(company);
});


//Change each company name to uppercase one by one and print them out
for (let i = 0; i < Companies.length; i++) {
    let company = Companies[i];
    let upperCaseCompany = company.toUpperCase();
    console.log(upperCaseCompany);
}


// Print the array as a sentence
const sentence = Companies.join(", ") + " are big IT companies.";
console.log(sentence);


// Check if a certain company exists in the itCompanies array
const companyToFind = "Microsoft";
if (Companies.includes(companyToFind)) {
  console.log(`${companyToFind} exists in the array.`);
} else {
  console.log(`${companyToFind} is not found.`);
}


//Filter out companies which have more than one 'o' without the filter method
let oo = []
for (let i = 0; i < Companies.length; i++) {
    oo.push(Companies[i].includes("oo"));
}


// Sort the array using sort() method
Companies.sort();
console.log(Companies);


// Reverse the array using reverse() method
Companies.reverse();
console.log(Companies);


// Slice out the first 3 companies from the array
const firstThreeCompanies = Companies.slice(0, 3);
console.log(firstThreeCompanies);


// Slice out the last 3 companies from the array
const lastThreeCompanies = Companies.slice(-3);
console.log(lastThreeCompanies);


const middleIndex = Math.floor(Companies.length / 2);


// Slice out the middle company or companies from the array.
const middleCompanies = Companies.slice(middleIndex, middleIndex + 1);

console.log(middleCompanies);


// Remove the first IT company from the array
Companies.shift();
console.log(Companies);


// Remove the middle IT company or companies from the array
Companies.splice(middleIndex, 1);
console.log(Companies);


// Remove the last IT company from the array
Companies.pop();
console.log(Companies);


// Remove all IT companies
Companies.length = 0;
console.log(Companies);