let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')



let shoppingCart = ["milk", "coffee", "tea", "honey"]
shoppingCart.unshift("meat");
shoppingCart.push("sugar");
shoppingCart[shoppingCart.indexOf("tea")] = "green tea";


// Remove 'Honey' if you are allergic to honey
let index = shoppingCart.indexOf('Honey');
if (index !== -1) {
    shoppingCart.splice(index, 1);
}

let frontend = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
let backend = ['Node', 'Express', 'MongoDB'];
let fullstack = frontend.concat(backend);
console.log(fullstack);



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


if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

console.log(countries);


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}



