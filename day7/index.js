function fullName() {
    console.log("Moustapha BA")
}
fullName();

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
fullName("Moustapha", "BA");

function addNumbers(a, b) {
    return a + b;
}
addNumbers(8, 5);


function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
areaOfRectangle(5, 3);

perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length * width);
    return perimeter;
}
perimeterOfRectangle(3, 5);


volumeOfRectPrism = (length, width, height) => {
    let volume = length * width * height;
    return volume;
}
volumeOfRectPrism(2, 3, 4);

AreaOfCircle = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
}
AreaOfCircle(7);

circumOfCircle = (r) => {
    const PI = 3.14;
    return PI * r
}
circumOfCircle(6);

density = (mass, volume) => {
    return mass * volume;
}
density(4, 8);

speed = (TDC, TT) => {
    return TDC / TT
}
speed(4, 6);

weight = (mass, gravity) => {
    return mass * gravity;
}
weight(4, 5);

BMI = (weight, height) => {
    let bmi = weight / (height / height);
    if (bmi < 18.5) {
        return `underweight`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        return `overweight`;
    } else if (bmi > 25 && bmi < 29.9) {
        return `overweight`;
    } else {
        return `obese`;
    }
}
BMI(4, 7);


celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}
celsiusToFahrenheit(5);

BMI = (weight, height) => {
    let bmi = weight / (height / height);
    if (bmi < 18.5) {
        return `underweight`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        return `overweight`;
    } else if (bmi > 25 && bmi < 29.9) {
        return `overweight`;
    } else {
        return `obese`;
    }
}
BMI(4, 7);

checkSeasons = (month) => {
    switch (month) {
        case "september":
        case "october":
        case "November":
            console.log("the season is Autumn");
            break;
        case "december":
        case "january":
        case "febuary":
            console.log("the season is Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("the season is Spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("the season is Summer");
            break;
        default:
            console.log("invalid Month")
    }
}
checkSeasons("january");

findMax = (x, y, z) => {
    return Math.max(x, y, z);
}
findMax(5, 7, 4)


function solveLinEquation(a, b, x, c) {
    let y = -(a*x + c) / b;
    return y;
}

let result = solveLinEquation(1, 2, 3, 4);

console.log(result);


function printArray(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printArray([1, 2, 3, 4, 5]);


showDateTime = () => {
    let date = new Date();
    let datee = date.getDate();
    let month = date.getUTCMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${datee}/${month + 1}/${year} ${hour}:${minutes} `
}
showDateTime();

swapValues = (a, b) => {
    let x = b;
    let y = a;
    console.log(x, y)
}
swapValues(2, 4)


reverseArr = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    console.log(newArr);
}
reverseArr([3, 4, 5])

capitalizeArr = (arr) => {
    let newArr = [];
    arr.forEach(function (ar) {
        newArr.push(ar.toUpperCase());
    })
    return newArr;
}
capitalizeArr(["john", "mike"]);

function removeItem(array, index) {
    if (index > -1 && index < array.length) {
        array.splice(index, 1);
    }
    return array;
}

let arr = [1, 2, 3, 4, 5];
console.log(removeItem(arr, 2)); 