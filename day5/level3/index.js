const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const middleIndex = Math.floor(countries.length / 2);

let firstHalf = countries.slice(0, countries.length / 2);
let secondHalf = countries.slice(countries.length / 2);



let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let minAge = ages.sort()[0];
let maxAge = ages.sort()[ages.length - 1];
console.log(minAge);
console.log(maxAge);
let medianAge = ages[Math.floor(ages.length / 2)];
console.log(medianAge);
let avgAge;
for (i = 0; i < ages.length; i++) {
    let totalAge = 0;
    totalAge += ages[i];
    avgAge = totalAge / ages.length;
}