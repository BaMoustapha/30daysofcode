const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach(country => {
    console.log(country);
});

names.forEach(name => {
    console.log(name);
});

numbers.forEach(number => {
    console.log(number);
});


let uppCaseCountries = countries.map(country => {
    return country.toUpperCase();
})
console.log(uppCaseCountries);

let countriesLength = countries.map(country => {
    return country.length
})


let squareNum = numbers.map(num => {
    return num * num
})
console.log(squareNum);

let uppCaseNames = names.map(name => {
    return name.toLocaleUpperCase();
})

console.log(uppCaseNames);


let prices = products.map(product => {
    return `${product.product} : ${product.price}`
})
console.log(prices);


let countriesWithLand = countries.filter(country => {
    return country.toLowerCase().includes("land")
})
console.log(countriesWithLand);


let countriesWith6chars = countries.filter(country => {
    return country.length === 6;
})
console.log(countriesWith6chars);


let countriesWithPlus6chars = countries.filter(country => {
    return country.length >= 6;
})
console.log(countriesWithPlus6chars);

let firstIndexPosNorwayExist = countries.findIndex(country => {
    return country.includes("Norway")
});
console.log(firstIndexPosNorwayExist);

let firstIndexPosRussiaExist = countries.findIndex(country => {
    return country.includes("Russia")
});
console.log(firstIndexPosRussiaExist);